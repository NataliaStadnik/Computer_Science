// class XMLHttpService extends XMLHttpRequestService {}

// class Http {
//     constructor(private xmlhttpService: XMLHttpService) { }

//     get(url: string , options: any) {
//         this.xmlhttpService.request(url,'GET');
//     }

//     post() {
//         this.xmlhttpService.request(url,'POST');
//     }
// }

// Здесь класс Http представляет собой высокоуровневый компонент, а XMLHttpService - низкоуровневый. 
// Класс Http не должен знать о том, что именно используется для организации сетевого соединения.

interface Connection {
    request(url: string, opts:any);
}

class Http {
    constructor(private httpConnection: Connection) { }

    get(url: string , options: any) {
        this.httpConnection.request(url,'GET');
    }

    post(url: string) {
        this.httpConnection.request(url,'POST');
    }
}

class XMLHttpService implements Connection {
    const xhr = new XMLHttpRequest();
    request(url: string, opts:any) {
        xhr.open();
        xhr.send();
    }
}