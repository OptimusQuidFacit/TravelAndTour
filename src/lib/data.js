import { connectToDb } from "./config/dbconnection";
import Orders from "./models/orders";
import User from "./models/user";

export const brand="TravelExpl";
export const domain = "https://travel-and-tour-pi.vercel.app"


export const places=[
    {
      place:"Maldives",
      image:"https://media.istockphoto.com/id/1161389146/photo/young-adult-woman-relaxing-on-a-swing-in-a-tropical-paradise.jpg?s=612x612&w=0&k=20&c=ckdOFWW_Q-e2kZ_pPTQD1mo2X6QzLbJcjrc01PDXhec=",
    },
    {
      place:"Switzerland",
      image:"https://media.istockphoto.com/id/1647902117/photo/zermatt-town-with-matterhorn-peak-in-mattertal-switzerland-at-dusk.jpg?s=612x612&w=0&k=20&c=Xbt0SKtOMZmmHZG3F0XVbo8tP5uEfCUqJMBgKseAwYs=",
    },
    {
      place:"Costa Rica",
      image:"https://media.istockphoto.com/id/929698244/photo/pacific-ocean-sunset-in-costa-rica.jpg?s=612x612&w=0&k=20&c=KnjGruafrDxOWfahhofuMv4u1ndnEzFts_gSNZOokJE=",
    },
    {
      place:"Italy",
      image:"https://media.istockphoto.com/id/1055676462/photo/autumn-sunset-in-a-hilly-vineyard.jpg?s=612x612&w=0&k=20&c=rcy5bXaYSirAIDoFDgTZe1-HPhoYrvO-9RzFewoXzzM=",
    },
    {
      place:"Kenya",
      image:"https://media.istockphoto.com/id/1129899359/photo/african-leopard.jpg?s=612x612&w=0&k=20&c=JkGlR-Cf_AJuNFQ7BOxfuNb2tWRb1DjppnDMCabaMNQ=",
    },
    {
      place:"Paris",
      image:"https://media.istockphoto.com/id/1208629449/photo/the-beach-at-taghazout-morocco.jpg?s=612x612&w=0&k=20&c=-s12BzYLQTA9qCEruFNr2IyL1E8ptz0aoD2wv9sIRVA=",
    },
    {
      place:"Greece",
      image:"https://media.istockphoto.com/id/512288442/photo/santorini-bell-tower-and-blue-domes-in-oia-on-greece.jpg?s=612x612&w=0&k=20&c=L4CHSzEtpfuNHsInqdtBzKcueq2mTbFRI12kTwU50QM="
    },
    {
      place:"Australia",
      image: "https://images.unsplash.com/photo-1666342736648-b3061cb63002?q=80&w=1502&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      place:"Canada",
      image: "https://media.istockphoto.com/id/1755322971/photo/the-most-beautiful-viewpoint-rainbow-bridge-tourist-attractions-in-the-city-park-of-taiwan.jpg?s=612x612&w=0&k=20&c=vT1ymxi0EjFxpsZJxzXFtBUYcAg1z8I7NXGpaFtUmlY="
    },
  ]

  export const accomodations=[
    {
        image:'https://images.pexels.com/photos/10459756/pexels-photo-10459756.jpeg?auto=compress&cs=tinysrgb&w=600',
        resort:'Royal Palace Hotel',
        place:'Paris',
        rate:200,
        rating:9.5,
    },
    {
        image:'https://images.pexels.com/photos/4993165/pexels-photo-4993165.jpeg?auto=compress&cs=tinysrgb&w=600',
        resort:'Mountain View Lodge',
        place:'Canada',
        rate:150,
        rating:9.1,
    },
    {
        image:'https://images.pexels.com/photos/16483814/pexels-photo-16483814/free-photo-of-bridge-above-pond-at-traditional-resort-on-sunset.jpeg?auto=compress&cs=tinysrgb&w=600',
        resort:'Sunset Resort Greece',
        place:'Greece',
        rate:180,
        rating:9.8,
    },
    {
        image:'https://images.pexels.com/photos/3051551/pexels-photo-3051551.jpeg?auto=compress&cs=tinysrgb&w=600',
        resort:'Golden Sands Villa',
        place:'Maldives',
        rate:250,
        rating:9.5,
        itinery:{
          flightDuration:'3 hrs',
          desc:'sjhsjchcducgduivgduiduvgduvhduigudgvuidgvuxgvjhxvhv h vxhxgyx'

        }
    },
    {
        image:'https://images.pexels.com/photos/15427371/pexels-photo-15427371/free-photo-of-people-having-picnics-at-the-bondi-beach-in-sydney-australia.jpeg?auto=compress&cs=tinysrgb&w=600',
        resort:'Seaside Inn',
        place:'Australia',
        rate:120,
        rating:9.5,
    },
  ]

  // export const flightPackages =[
  //   {
  //     name:'Air Peace',
  //     takeOff:[
  //      "8am GMT", "10am GMT", "2pm GMT"
  //     ]
  //   },
  //   {
  //     name:'Ethopian Airline',
  //     takeOff:[
  //      "9am GMT", "11am GMT", "3pm GMT"
  //     ]
  //   }
  // ]
  export const locations = [
    {
      name:"Lagos",
      flightPackages: [
        {
          name:'Air Peace',
          takeOff:[
           "8am GMT", "10am GMT", "2pm GMT"
          ],
          prices:{
            Paris:2400,
            Canada:3500,
            Greece:2800,
            Maldives:2100,
          },
        },
        {
          name:'Ethopian Airline',
          takeOff:[
           "9am GMT", "11am GMT", "3pm GMT"
          ],
          prices:{
            Paris:2700,
            Canada:3900,
            Greece:3100,
            Maldives:2400,
          },
        }
      ]
    },
    {
      name:"Enugu",
      
      flightPackages: [
        {
          name:'Air Peace',
          takeOff:[
           "8am GMT", "10am GMT", "2pm GMT"
          ],
          prices:{
            Paris:2455,
            Canada:3560,
            Greece:2860,
            Australia:3160,
            Italy:2140,
            CostaRica:2190,
            Maldives:2130,
          },
        },
        {
          name:'Ethopian Airline',
          takeOff:[
           "9am GMT", "11am GMT", "3pm GMT"
          ],
          prices:{
            Paris:2855,
            Canada:3960,
            Greece:3260,
            Maldives:2460,
            Australia:3160,
            Italy:2170,
            CostaRica:2150,
            Maldives:2180,
          },

        }
      ]
    },
  ]
  export const getOrder= async (id)=>{
    try{
        connectToDb();
        const order= await fetch(`${domain}/api/orders/${id} `);
        if(order) return order.json();
        return "Order not found";
        // const order= await Orders.findOne({_id:id});
        // const {_id, flight_Fee, accommodationFee ,destination, accommodation, checkIn, guests, nights, Airline, take_Off_Time, comments} = order;

        // if(order) return {_id, flight_Fee, accommodationFee ,destination, accommodation, checkIn, guests, nights, Airline, take_Off_Time, comments};
        // ;
        // console.log(order);
        // return "Order not found";


    }
    catch(err){
        console.log(err);
        return err;
    }
}
  export const getUsers= async ()=>{

    try{
        connectToDb();
        // const users= await fetch(`${domain}/api/users`);
        const users= await User.find({}).lean();
        if(users) return users;
        return 'No user found';
    }
    catch(err){
        console.log(err);
        return err;
    }
}
  export const getSpecificUsers= async (query)=>{

    try{
        connectToDb();
        // const users= await fetch(`${domain}/api/users`);
        const users= await User.find(query).lean();
        if(users) return users;
        return 'No user found';
    }
    catch(err){
        console.log(err);
        return err;
    }
}
  export const getOrders= async ()=>{

    try{
        connectToDb();
        // const users= await fetch(`${domain}/api/users`);
        const orders= await Orders.find().lean();
        if(orders) return orders;
        return 'No Orders found';
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const getSpecificOrders= async (query)=>{

  try{
      connectToDb();
      // const users= await fetch(`${domain}/api/users`);
      const orders= await Orders.find(query).lean();
      if(orders) return orders;
      return null;
  }
  catch(err){
      console.log(err);
      return err;
  }
}