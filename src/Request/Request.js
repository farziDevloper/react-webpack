import axios from "axios";

export const callApiUsingAxios = async (endPoint ,type='GET',payload , successKey=true , headerOptions=false ) => {
    console.log("request reached");
        try{
            const method = type.toLowerCase();
            const options = {
                method: method,
                url :BaseUrl+endPoint,
                headers: await getRequestHeaders(headerOptions),
                timeout: await timeOutConstant()
            }
            console.log();
            (type === 'POST' || type === 'PUT' ) && payload && (options.data = payload);
            const rawResponse = await axios(options);
            const response =  await rawResponse;
            if (successKey) {
                if (response.data) {
                  return response.data ? response.data : response;
                } else if (response && response.data.msg) {
                 console.warn(response.data.msg);
                }
               else {
                return response;
              }
            }
        }
    catch (err) {
        if (err?.response && err?.response?.status) {
          console.warn(err.response);
        } else if (err?.code === 'ECONNABORTED') {
        //   if (!alertShown) {
        //     alertShown = true;
         console.warn("error");
        //     setTimeout(() => {
        //       alertShown = false;
        //     }, 1000);
        //   }
        }
      }

}



const getRequestHeaders = async (headerOptions) => {
    const token = "Abhishek Kumar singh";
    let header = {
        Accept : headerOptions?.Accept ? headerOptions?.Accept : 'application/json',
        'Cache-control': 'no-store',
        Pragma: 'no-cache',
    }
    if (headerOptions?.['Content-Type'] !== 'multipart/form-data') {
        header['Content-Type'] = headerOptions?.['Content-Type']
          ? headerOptions?.['Content-Type']
          : 'application/json';
      } else {
        header['Content-Type'] = headerOptions?.['Content-Type'];
      }
      token && (header.Authorization = token);
      return header;

}

const timeOutConstant = async () => {
    let timeout = 30000;
    return timeout;
} 



const BaseUrl =  'https://jsonplaceholder.typicode.com/'

