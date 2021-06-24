import axios from 'axios';

const url = 'https://2tywuqfoxe.execute-api.us-west-2.amazonaws.com';

const url2 = 'https://c2mtaxg1af.execute-api.us-west-2.amazonaws.com';

export const getInfo = (cd_identityUsuario, cd_identityCliente) => axios.get(`${url}/api-comunicado/obtienecomunicado?cd_identityUsuario=${cd_identityUsuario}&cd_identityCliente=${cd_identityCliente}`);

export const getPosts = (cd_identityUsuario) => axios.get(`${url2}/default/Lambda_PruebaLogin?cd_identityUsuario=${cd_identityUsuario}`);

