"use client"

import { accomodations, flightPackages, locations, places } from "@/lib/data";
// import { usePathname } from "next/navigation";
import styles from "./bookings.module.css"
import { addOrder } from "@/lib/controllers/orders";
import { useEffect, useState } from "react";
import {useFormState} from "react-dom";
import Summary from "../summary/Summary";

const Bookings = ({option}) => {
    const [disabled, setDisabled] = useState(false);
    const [location, setLocation] = useState(null);
    const [airline, setAirline] = useState(null);
    const [state, formAction] = useFormState(addOrder, undefined);
    
    //If the option parameter exists from the page's param property, then we use it to find the chosen packagen otherwise we just pick the first accommodation on our db
    const [choosenPackage, setChoosenPackage] = useState(option?accomodations.find(item=>item.resort===option):accomodations[0]);
    //Since this chosen package comes with a place where it is located, it is selected in the country/city field as in line 54. and thus the choosen package state is used to filter out only the accommodations in that Country/city to preserve the integrity  of the form.
    const [choosenAccommodations, setChoosenAccommodations] = useState(accomodations.filter(item=>item.place===choosenPackage.place));
    // console.log(choosenPackage);
    const handleChoosenAccommodations = (e)=>{
        let items=accomodations.filter(item=>item.place===e.target.value)
        items.length>0?setChoosenAccommodations(items):setChoosenAccommodations(null);   
        // console.log(items)
    }
    const handleChoosenPackage = (e)=>{
        setChoosenPackage(choosenAccommodations.find(item=>item.resort===e.target.value));   
    }
    const handleLocation = (e)=>{
        setLocation(locations.find(location=>location.name==e.target.value))
        // console.log(e.target.value);
    }
    const handleAirline = (e)=>{
        setAirline(location.flightPackages.find(airline=>airline.name==e.target.value))
    }

    // console.log(location, airline)
    useEffect(
        ()=>
        {
            // choosenPackage&&setChoosenAccommodations(accomodations.filter(item=>item.place===choosenPackage?.place))
            setAirline(null);
        }
    , [choosenPackage]);
    useEffect(
        ()=>
        {
            choosenAccommodations&&setChoosenPackage(choosenAccommodations[0])
            
        }
    , [choosenAccommodations]);
    return (
        <div className={`shadow shadow-1 ${styles.wrapper}`}>
            <form onChange={()=>setDisabled(false)} onSubmit={()=>setDisabled(true)} action={formAction} className={styles.container} >
                <div className={`${styles.fields}`}>

                    <div className={` ${styles.field}`}>
                        <label htmlFor="destination" className={styles.label}>
                            Country/City
                        </label>
                        <select onChange={handleChoosenAccommodations} name="destination" id="destination" defaultValue={choosenPackage?.place}>
                            {places.map(place=> 
                            <option key={place.image} >
                                {place.place}
                            </option>
                            )}
                        </select>
                    </div>
                    <div className={` ${styles.field}`}>
                        <div className="mb-2">   
                            <label className={styles.label} htmlFor="check_In">
                                Check-in date
                            </label>
                            <input type="date" name="check_In" id="check_In" />
                        </div>
                        
                    </div>
                    <div className={` ${styles.field}`}>
                        <label htmlFor="accommodation" className={styles.label}>
                            Package or Accomodation
                        </label>
                        {choosenAccommodations?
                        <select defaultValue={option} onChange={handleChoosenPackage} name="accommodation" id="accommodation" >
                            
                            {choosenAccommodations?.map(place=> 
                            <option key={place.image}>
                                {place.resort}
                            </option>
                            )
                        }
                        </select>
                        :
                        <p className="text-white w-75">No packages for this location at the moment</p>
                        }
                    </div>
                    <div className={` ${styles.field}`}>
                        <label htmlFor="guests" className={styles.label}>
                            No of Guests
                        </label>
                        <input type="number" min={1} defaultValue={1} name="guests" id="guests" />
                        <label htmlFor="nights" className={styles.label}>
                            No of Nights
                        </label>
                        <input min={1} defaultValue={1} type="number" name="nights" id="nights" />
                    </div>
                    <div className={` ${styles.field}`}>

                            <div>
                                {choosenAccommodations&&
                                <div>
                                <label htmlFor="location" className={styles.label}>
                                    Your Location
                                </label>
                                <select onChange={handleLocation} name="location" id="location">
                                    <option value={null} selected>
                                        Choose
                                    </option>
                                    {
                                        locations.filter(location=>location?.flightPackages
                                        .some(item => item.prices.hasOwnProperty(choosenPackage?.place)))
                                        .map(item=>
                                        <option key={item.name}>
                                                {item.name}
                                        </option>
                                            )
                                    }
                                </select>
                                </div>
                                }
                                {
                                    location &&
                                    <>
                                    <label htmlFor="Airline" className={styles.label}>
                                    Airline
                                </label>
                                <select onChange={handleAirline} name="Airline" id="Airline">
                                        <option value="">

                                        </option>
                                    {
                                        location?.flightPackages.map(item=>
                                            <option key={item.image}>
                                                {item.name}
                                            </option>
                                            )
                                        }
                                </select>
                                </>
                                }
                                {airline&&
                                <>
                                <label htmlFor="Time" className={styles.label}>
                                    Time
                                </label>
                                <select name="take_Off_Time" id="Time">
                                    {
                                        airline?.takeOff.map(item=>
                                            
                                            <option key={item}>
                                                {item}
                                                </option>
                                            
                                            )
                                        }
                                </select>
                                </>
                                }
                            </div>
                            {   choosenPackage&&
                                <input type="hidden" name="flight_Fee" value={airline?.prices[choosenPackage?.place]} />}
                        {/* <input type="text" name="flightDetails" id="flightDetails" /> */}
                    </div>
                    <div className={` ${styles.field}`}>
                        <label htmlFor="comments" className={styles.label}>
                            Special requests or comments
                        </label>
                        <textarea className={styles.comment} name="comments" id="comments" cols="30" rows="10"></textarea>
                        </div>
                </div>
                <input type="hidden" name="unitAccommodationPrice" value={choosenPackage?.rate} />
                <div className="px-4 text-center">
                    <input  className={`btn btn-secondary text-white fw-bold ${styles.button}`} type="submit" value="Proceed" disabled={disabled}/>
                </div>
            </form>

            <div className="message">
                {<p className="text-info text-center fw-bold">
                    {state?.message}
                </p>}
                {<p className="text-danger text-center fw-bold">
                    {state?.error}
                </p>}
                
            </div>
            {/* {showModal&&
                    <Summary id={`660c140c57b31067e7a45240`} />
               } */}
        </div>
    );
}

export default Bookings;