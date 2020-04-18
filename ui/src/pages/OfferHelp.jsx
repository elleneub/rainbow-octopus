import React from 'react';
import PostCardSection from 'components/PostCardSection';
import Map from 'components/Map';

class OfferHelpPage extends React.Component {

    // This is for calling an API related to MapBox -- needs to be on whichever page we render the map
    // Will take address information from USER and convert to coordinates to be rendered on the map
    state = {
        latitude: 39.982,
        longitude: -82.998
    };

    async componentDidMount() {
        const address = "43215";
        const mapboxAPIKey = "pk.eyJ1Ijoia2F5bGluYml0dG5lciIsImEiOiJjazkxejZ6cG8wMG0zM2tuN3IwaDB4ZzduIn0.HXn_ybie-wXPkHDQldW_Bw";
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${mapboxAPIKey}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ latitude: data.features[0].geometry.coordinates[0]});
        this.setState({ longitude: data.features[0].geometry.coordinates[1]});
    }

    render() {
        const posts = [
            {
                id: '0',
                title: 'Need groceries pick-up',
                location: 'NE Minneapolis',
                categories: ['Light Yard Work'],
                requester_user_id: 4,
                notes:
                    'I need someone to pick up my groceries; I live alone and have a compromised immune system.',
            },
            {
                id: '1',
                title: 'Need Help Moving Heavy Boxes',
                location: 'Cedar/Riverside',
                categories: ['Heavy Yard Work'],
                requester_user_id: 2,
                notes: 'I need someone help me move about 20-30 heavy boxes into my attic.',
            },
            {
                id: '2',
                title: 'Need mask',
                location: 'South Minneapolis',
                categories: ['Light Yard Work'],
                requester_user_id: 4,
                notes:
                    "I need a mask because I'm elderly and still need to do my own shopping.",
            },
        ]

        return (
            <>
            <h1 className="page-title">Offer to Help</h1>
            <div className="m-3" id="ohcards">
                <div className="card">
                    <div className="card-body">
                        <PostCardSection posts={posts} />
                    </div>
                </div>
                <Map  className="ohmap"/>
             </div>
            </>
        )
    }
}

export default OfferHelpPage
