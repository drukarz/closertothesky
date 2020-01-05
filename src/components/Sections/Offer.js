import React, { Component } from 'react';

class Offer extends Component{

    render() {
        return(
            <div className="text-offer-about">
                <br/>
                <br/>
                <br/>
                <h3>
                     Twój wypoczynek w magicznym miejscu.
                </h3>
                <div>
                    Do dyspozycji Naszych gości oddajemy 12 komfortowo urządzonych pokoi z łazienkami.
                    W budynku znajdują się również sala zabaw dla dzieci, biblioteka z okazałą kolekcją książek,
                    strefa SPA, sala fitness oraz restauracja. Razem z przytulną aranżacją wnętrz gwarantuje to
                    komfort prawdziwego wypoczynku i spokoju, odpowiedniego dla tak wyjątkowego miejsca.
                </div>
                <h3>
                    Dla Naszych Gości oferujemy miejsca w pokojach:
                </h3>
                <ul>
                    <li>
                        2-osobowych
                    </li>
                    <li>
                        3-osobowych
                    </li>
                    <li>
                        4-osobowych
                    </li>
                </ul>
                <h3>
                    Cennik
                </h3>
                <br/>

                Cennik na noclegi dla klientów indywidualnych dostępny jest poprzez rezerwację online lub telefonicznie.
                Dzieci do lat 4 nocleg w pokoju rodziców lub opiekunów – bez dostawki (max 2 dzieci w pokoju) – gratis.
                Doba hotelowa rozpoczyna się od godz. 14:00 i trwa do godz.12:00.
                <br/>
             </div>
        );
    }
}

export default Offer;