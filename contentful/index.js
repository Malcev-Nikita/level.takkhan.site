require('dotenv').config();

import { createClient } from "contentful";

const client = createClient({
    space: process.env.SpaceID,
    accessToken: process.env.ContentDeliveryAPI
}); 

export default client;