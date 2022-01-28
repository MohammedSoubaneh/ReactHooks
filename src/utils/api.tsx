export default function getData (url: string) {
    return fetch(url)
            .then(resp => {

                if(!resp.ok){
                    throw Error('There was a problem getting data')
                }
                return resp.json();
            })
}