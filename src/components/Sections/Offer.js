import React, { Component } from 'react';

class Offer extends Component{

    render() {
        return(
            <div className="offer-text">
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
                        2-osobowych typu DBL (1 łóżko)
                    </li>
                    <li>
                        2-osobowych typu TWIN (2 łóżka)
                    </li>
                    <li>
                        4-osobowych
                    </li>
                </ul>
                <h3>
                    Cennik
                </h3>
                Cennik na noclegi dla klientów indywidualnych dostępny jest poprzez rezerwację online (lub telefonicznie).
                <br />
                <h3>
                    Cena pokoju zawiera:
                </h3>
                <ul>
                    <li>
                        nocleg w komfortowym pokoju
                    </li>
                    <li>
                        wyżywienie
                    </li>
                    <li>
                        bezpłatny dostęp do bezprzewodowego internetu
                    </li>
                    <li>
                        parking
                    </li>
                    <li>
                        8% VAT
                    </li>
                    <li>
                        dzieci do lat 4 nocleg w pokoju rodziców lub opiekunów – bez dostawki (max 2 dzieci w pokoju) – gratis
                    </li>
                </ul>
                <br />
                Doba hotelowa rozpoczyna się od godz. 14:00 i trwa do godz.12:00
                <br/>
                <br/>
                <br/>
             </div>
        );
    }
}

export default Offer;