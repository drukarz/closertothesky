import React, { Component } from 'react';
import axios from "axios";

class Contact extends Component
{
    constructor(props){
        super(props);

        this.state = {
            error : false
        };

    }

     onDownload = () => {
        axios({
            url: 'http://localhost:8989/file',
            method: 'GET',
            responseType: 'blob',
        }).then((response) => {

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'regulamin.pdf');
            document.body.appendChild(link);
            link.click();
        }).catch(error => {
            this.setState({error : true})
        });
    }

    render() {

        if(this.state.error === true){
            this.setState({error : false});
            throw new Error('Przepraszamy, problem z dostępem do serwera. Nie można pobrać pliku regulaminu.');
        }

        return(
            <div className="contact-text">
                <div>
                   pensjonat "Blizej Nieba"
                   <br/>
                   Wola Skrzydlańska 128
                </div>
                <h3>
                    email:
                </h3>
                <div>
                    blizejniebapensjonat@gmail.com
                </div>
                <h3>
                    telefon:
                </h3>
                <div>
                    502 812 454
                </div>
                <h3>
                    NIP:
                </h3>
                <div>
                    7372220463
                </div>
                <h3>
                    REGON:
                </h3>
                <div>
                    384739963
                </div>
                <div>
                    <br/>
                    <div>
                        aby zapoznać się z regulaminem kliknij <b onClick={this.onDownload}>pobierz</b>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;