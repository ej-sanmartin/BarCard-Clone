import { gql } from 'apollo-boost';

const getVenuesQuery = gql`
{
  allVenues(orderBy: name_ASC ){
    id
    name
    address
    description
    hoursText
    neighborhoods {
      name
    }
    photos {
      handle
    }
    category {
      name
    }
  }
}
`

const getCategoriesQuery = gql`
{
	allCategories{
    id
  	name
    venues{
      id
      name
      address
      description
      hoursText
      neighborhoods{
        name
      }
      photos{
        handle
      }
      category{
        name
      }
    }
	}
}
`

export {getVenuesQuery, getCategoriesQuery};
