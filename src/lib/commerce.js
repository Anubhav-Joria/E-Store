// TO IMPORT REAL PRODUCTS FROM
import Commerce from "@chec/commerce.js";

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY, true
);

//  for creating a fully functional webshop application you would need a full backend api with all the routes for fetching the products creating the products deleting them updating them selling them you need authentication and a lot more things all of that is stored in this little instance called
