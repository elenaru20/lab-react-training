import React from 'react';
import profiles from '../data/berlin.json';


class FaceBook extends React.Component {

    state = { 
        profiles: profiles,
        selectedProfiles: []
    }

    clickHandler = element => {
        if(element.target.innerHTML !== 'All') {
            const sortedProfiles = this.state.profiles.filter(profile => profile.country === element.target.innerHTML);

            this.setState({
                selectedProfiles: sortedProfiles
            })
        } else {
            const allProfiles = this.state.profiles.filter(profile => profile);
            this.setState({
                selectedProfiles: allProfiles
            })
        }
    }

    render() {
        const people = this.state.profiles.map( (person, index) => {
            return (
                <div style={{border: "1px solid black", backgroundColor: this.state.selectedProfiles.includes(person) ? 'lightblue' : 'white'}} key={index} className="faceBook-Box">
                    <img style={{width:'100px', marginRight:'20px'}} src={person.img} alt='faceBook' />
                    <div>
                        <p><strong>First name:</strong> {person.firstName}</p>
                        <p><strong>Last name:</strong> {person.lastName}</p>
                        <p><strong>Country:</strong> {person.country}</p>
                        <p><strong>Type:</strong> {person.isStudent ?'Student':'Teacher'}</p> 
                    </div>
                </div>
            ) 
        })
        // set contains only distinct elements/objects without the need of being allocated orderly by index https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a
        const countryArr = [...new Set(this.state.profiles.map(person => {
            return person.country;
        }))];

        const countryButtons = countryArr.map( (country,index) => {
            return (
                <button onClick={this.clickHandler} key={index}>{country}</button>
            )
        })

        return (
            <div>
                <button onClick={this.clickHandler}>All</button>
                {countryButtons}
                {people} 
            </div>
        )
    }
}


export default FaceBook;


//we cannot use HOAX in functions yet for state-handling

// function FaceBook({data}){
//     console.log('facebook', data)

//     const people = data.map( (person,index) => {
        
//         return(
           
//               <div key={index} className="faceBook-Box" style={{border: "1px solid black"}}>
//                             <img style={{width:'100px', marginRight:'20px'}} src={person.img} alt="faceBook" />
//                             <div>
//                                 <p>First Name: {person.firstName} </p>
//                                 <p>Last Name: {person.lastName} </p>
//                                 <p>Country: {person.country} </p>
//                                 <p>Type: {person.isStudent?'Student':'Teacher'} </p>
//                             </div>
//               </div>
            
//           )
//     })

//     return (
//         <div>
//             {people}
//         </div>
//     )
//   }

// export default FaceBook;