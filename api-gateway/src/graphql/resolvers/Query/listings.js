import ListingsService from '#root/adapters/ListingsService'

const listingsResorver = async () => {
   return ListingsService.fetchAllListings();
         
};

export default listingsResorver;

