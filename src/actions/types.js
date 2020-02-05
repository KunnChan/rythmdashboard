export const FETCH_USER = "FETCH_USER";
export const AUTH_USER = "AUTH_USER";
export const LOCALE_SET = "LOCALE_SET";
export const UNAUTH_USER = "UNAUTH_USER";

export const SONGS = "SONGS";
export const USER ="USER";

export const keyToken = "access_token";
export const keyUserName = "user_name";
export const keyUser = "user_data";
export const keySongs = 'key_songs';

const endpoint = "/xapiv1";
export const urlToken = endpoint + "/oauth/token";
export const urlUserInfo = endpoint + '/zone/user/username/';

export const urlSongs = endpoint + '/song/query';

export const urlLogout = '/api/Waiter/Logout';
export const urlGetWaiter = '/api/Waiter/Waiter';
export const urlGetTable = '/api/Table/Tables';
export const urlGetMenuGroup = '/api/Menu/MGroupNames';
export const urlGetTnos = '/api/Tno/Tnos';

export const urlGetMenus = '/api/Menu/Menu';
export const urlGetOrderList = '/api/OrderCancel/OrderList';
export const urlGetBillOrder = '/api/Bill/OrderList';

export const urlPostSendOrder = '/api/tTo/SendOrder';
export const urlPostCancelOrder = '/api/OrderCancel/OrderCancel';
export const urlPostBillOrder = '/api/Bill/BillNPaid';


export const levelOrder = "order";
export const levelReOrder = "reOrder";
export const levelViewBill = "viewBill";
export const levelPrintBill = "printBill";
export const levelPaid = "paid";
export const levelPaidDirect = "directPaid";
export const levelCancelOrder = "cancelOrder";