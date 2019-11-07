import { BUY_ITEM, REMOVE_BUY } from '../actions/actions';


const initialState = {
    car1: {
      additionalPrice: 0,
      car: {
        price: 26395,
        name: "2019 Ford Mustang",
        image:
          "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
        features: []
      },
      additionalFeatures: [
        { id: 1, name: "V-6 engine", price: 1500 },
        { id: 2, name: "Racing detail package", price: 1500 },
        { id: 3, name: "Premium sound system", price: 500 },
        { id: 4, name: "Rear spoiler", price: 250 },
        { id: 5, name: "Neon Underglow", price: 2000 }
      ]
    },
    car2: {
      additionalPrice: 0,
      car: {
        price: 34999,
        name: "Honda CRV",
        image:
          "https://www.cstatic-images.com/car-pictures/xl/usc90hos022d021001.png",
        features: []
      },
      additionalFeatures: [
        { id: 1, name: "AWD", price: 1111 },
        { id: 2, name: "LEather Interior", price: 2000 },
        { id: 3, name: "Body Siding", price: 225 },
        { id: 4, name: "Parking Sensors", price: 514 },
        { id: 5, name: "Hands Free Tailgate", price: 390 }
      ]
    },
    car3: {
      additionalPrice: 0,
      car: {
        price: 250000,
        name: "Tesla Roadster",
        image:
          "https://crdms.images.consumerreports.org/c_lfill,w_720,q_auto,f_auto/prod/cars/cr/model-years/9120-2020-tesla-roadster",
        features: []
      },
      additionalFeatures: [
        { id: 1, name: "Peformance", price: 43000 },
        { id: 2, name: "Long Range", price: 20000 },
        { id: 3, name: '19" Sport Wheels', price: 1000 },
        { id: 4, name: "White Interior", price: 1000 },
        { id: 5, name: "Self Driving", price: 7000 }
      ]
    }
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ITEM:
            return{
                ...state,
                [action.payload.carId]: {
                additionalPrice: state[action.payload.carId].additionalPrice + action.payload.feature.price,
                car: {
                    ...state[action.payload.carId].car,
                    features: [
                        ...state[action.payload.carId].car.features,
                        action.payload.feature
                    ]
                },
                additionalFeatures: state[action.payload.carId].additionalFeatures.filter(item => !(item.id === action.payload.feature.id))
            }
        };
        case REMOVE_BUY:
          console.log(state, action.payload)
            return {
                ...state,
                [action.payload.carId]: {
                additionalPrice: (state[action.payload.carId].additionalPrice - action.payload.feature.price),
                car: {
                    ...state[action.payload.carId].car, 
                    features: state[action.payload.carId].car.features.filter(item => !(item.id===action.payload.feature.id))},
                    additionalFeatures: [...state[action.payload.carId].additionalFeatures, action.payload.feature]
                }    
              }
        default:
            return state;
    }
}

