
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");


  
  const apiKey = process.env.EXPO_PUBLIC_GOOGLE_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
            role: "user",
            parts: [
              {text: "Generate Travel Plan for Location: New York USA, for 1 Days and 1 Night for Family with a Luxury budget with a Flight details, Flight Price with Booking url, Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and Places to visit nearby with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time to travel each of the location for 1 days and 1 night with each day plan with best time to visit in JSON format."},
            ],
          },
          {
            role: "model",
            parts: [
              {text: "```json\n{\n  \"trip_details\": {\n    \"destination\": \"New York City, USA\",\n    \"duration\": \"1 Day, 1 Night\",\n    \"budget\": \"Luxury\",\n    \"travelers\": \"Family\"\n  },\n  \"flight_details\": {\n    \"flight_info\": [\n      {\n        \"airline\": \"Delta Airlines\",\n        \"flight_number\": \"DL1234\",\n        \"departure_city\": \"Los Angeles, CA\",\n        \"arrival_city\": \"New York City, NY\",\n        \"departure_date\": \"2023-12-15\",\n        \"departure_time\": \"10:00 AM\",\n        \"arrival_date\": \"2023-12-15\",\n        \"arrival_time\": \"01:00 PM\",\n        \"price\": \"$500\",\n        \"booking_url\": \"https://www.delta.com\"\n      }\n    ]\n  },\n  \"hotel_details\": {\n    \"hotel_options\": [\n      {\n        \"hotel_name\": \"The Peninsula New York\",\n        \"hotel_address\": \"700 Fifth Avenue, New York, NY 10019\",\n        \"price\": \"$1,500+\",\n        \"hotel_image_url\": \"https://www.thepeninsula.com/newyork/en/images/hotel/gallery/peninsula-new-york-exterior-day-990x650.jpg\",\n        \"geo_coordinates\": {\n          \"latitude\": 40.7580,\n          \"longitude\": -73.9785\n        },\n        \"rating\": 4.8,\n        \"description\": \"A luxurious hotel in Midtown Manhattan, featuring elegant rooms, fine dining, and a rooftop terrace with stunning city views.\"\n      },\n      {\n        \"hotel_name\": \"The Ritz-Carlton New York, Central Park\",\n        \"hotel_address\": \"50 Central Park South, New York, NY 10019\",\n        \"price\": \"$1,200+\",\n        \"hotel_image_url\": \"https://www.ritzcarlton.com/en/hotels/new-york/central-park/images/hotel/gallery/ritz-carlton-new-york-central-park-exterior-990x650.jpg\",\n        \"geo_coordinates\": {\n          \"latitude\": 40.7649,\n          \"longitude\": -73.9768\n        },\n        \"rating\": 4.7,\n        \"description\": \"A sophisticated hotel with elegant accommodations, a Michelin-starred restaurant, and a prime location overlooking Central Park.\"\n      },\n      {\n        \"hotel_name\": \"The St. Regis New York\",\n        \"hotel_address\": \"2 East 55th Street, New York, NY 10022\",\n        \"price\": \"$1,000+\",\n        \"hotel_image_url\": \"https://www.stregis.com/newyork/images/hotel/gallery/st-regis-new-york-exterior-990x650.jpg\",\n        \"geo_coordinates\": {\n          \"latitude\": 40.7586,\n          \"longitude\": -73.9677\n        },\n        \"rating\": 4.6,\n        \"description\": \"A historic landmark hotel known for its elegant decor, world-class amenities, and proximity to Fifth Avenue shopping.\"\n      }\n    ]\n  },\n  \"day_plans\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"time\": \"10:00 AM\",\n          \"activity\": \"Arrive at New York City\",\n          \"location\": {\n            \"place_name\": \"JFK International Airport\",\n            \"place_details\": \"New York City's primary international airport\",\n            \"place_image_url\": \"https://www.panynj.gov/images/airports/jfk.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.6413,\n              \"longitude\": -73.7781\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"1 hour (depending on traffic)\"\n          }\n        },\n        {\n          \"time\": \"11:00 AM\",\n          \"activity\": \"Check-in at hotel\",\n          \"location\": {\n            \"place_name\": \"The Peninsula New York\",\n            \"place_details\": \"Luxury hotel in Midtown Manhattan\",\n            \"place_image_url\": \"https://www.thepeninsula.com/newyork/en/images/hotel/gallery/peninsula-new-york-exterior-day-990x650.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7580,\n              \"longitude\": -73.9785\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"15 minutes\"\n          }\n        },\n        {\n          \"time\": \"12:00 PM\",\n          \"activity\": \"Lunch at The Polo Bar\",\n          \"location\": {\n            \"place_name\": \"The Polo Bar\",\n            \"place_details\": \"Upscale restaurant known for its classic American cuisine\",\n            \"place_image_url\": \"https://www.thepolobar.com/images/gallery/the-polo-bar-interior-design.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7584,\n              \"longitude\": -73.9787\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"5 minutes\"\n          }\n        },\n        {\n          \"time\": \"02:00 PM\",\n          \"activity\": \"Visit Top of the Rock\",\n          \"location\": {\n            \"place_name\": \"Top of the Rock\",\n            \"place_details\": \"Observation deck at Rockefeller Center with panoramic city views\",\n            \"place_image_url\": \"https://www.rockefellercenter.com/sites/default/files/top-of-the-rock-observation-deck-night.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7580,\n              \"longitude\": -73.9785\n            },\n            \"ticket_pricing\": \"$39\",\n            \"time_to_travel\": \"15 minutes\"\n          }\n        },\n        {\n          \"time\": \"04:00 PM\",\n          \"activity\": \"Stroll through Central Park\",\n          \"location\": {\n            \"place_name\": \"Central Park\",\n            \"place_details\": \"Iconic urban park with walking paths, gardens, and attractions\",\n            \"place_image_url\": \"https://www.nycgovparks.org/images/park-images/central-park/central-park-pond.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7829,\n              \"longitude\": -73.9654\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"1 hour\"\n          }\n        },\n        {\n          \"time\": \"06:00 PM\",\n          \"activity\": \"Dinner at The NoMad Restaurant\",\n          \"location\": {\n            \"place_name\": \"The NoMad Restaurant\",\n            \"place_details\": \"Fine dining restaurant with modern American cuisine\",\n            \"place_image_url\": \"https://www.thenomadhotel.com/images/restaurants/nomad-restaurant-interior-990x650.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7392,\n              \"longitude\": -73.9888\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"30 minutes\"\n          }\n        },\n        {\n          \"time\": \"08:00 PM\",\n          \"activity\": \"Enjoy Broadway Show\",\n          \"location\": {\n            \"place_name\": \"Broadway Theatre\",\n            \"place_details\": \"World-renowned theatre district with a variety of musicals and plays\",\n            \"place_image_url\": \"https://www.playbill.com/media/images/article/2018/03/16/161689-broadway-show-tickets-for-sale-on-playbill.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7578,\n              \"longitude\": -73.9856\n            },\n            \"ticket_pricing\": \"Varies depending on show\",\n            \"time_to_travel\": \"15 minutes\"\n          }\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"time\": \"09:00 AM\",\n          \"activity\": \"Breakfast at The Carlyle Hotel\",\n          \"location\": {\n            \"place_name\": \"The Carlyle Hotel\",\n            \"place_details\": \"Luxury hotel with a renowned breakfast service\",\n            \"place_image_url\": \"https://www.thecarlyle.com/images/gallery/hotel/carlyle-exterior-990x650.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7687,\n              \"longitude\": -73.9627\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"15 minutes\"\n          }\n        },\n        {\n          \"time\": \"10:30 AM\",\n          \"activity\": \"Visit the Metropolitan Museum of Art\",\n          \"location\": {\n            \"place_name\": \"The Metropolitan Museum of Art\",\n            \"place_details\": \"World-class art museum with a vast collection of paintings, sculptures, and artifacts\",\n            \"place_image_url\": \"https://www.metmuseum.org/sites/default/files/styles/featured-image/public/images/met_exterior_image_72.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7815,\n              \"longitude\": -73.9632\n            },\n            \"ticket_pricing\": \"Suggested donation of $25\",\n            \"time_to_travel\": \"20 minutes\"\n          }\n        },\n        {\n          \"time\": \"01:30 PM\",\n          \"activity\": \"Lunch at The Clocktower\",\n          \"location\": {\n            \"place_name\": \"The Clocktower\",\n            \"place_details\": \"Upscale restaurant with British-inspired cuisine\",\n            \"place_image_url\": \"https://www.theclocktowernyc.com/assets/images/gallery/Clocktower-Restaurant.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7573,\n              \"longitude\": -73.9866\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"15 minutes\"\n          }\n        },\n        {\n          \"time\": \"03:30 PM\",\n          \"activity\": \"Explore the High Line\",\n          \"location\": {\n            \"place_name\": \"The High Line\",\n            \"place_details\": \"Elevated park built on a former railroad line, offering unique city views\",\n            \"place_image_url\": \"https://www.thehighline.org/sites/default/files/styles/gallery_full/public/field/image/1000x1000_IMG_0022_highline_summer.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7501,\n              \"longitude\": -74.0042\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"30 minutes\"\n          }\n        },\n        {\n          \"time\": \"05:00 PM\",\n          \"activity\": \"Visit the Statue of Liberty\",\n          \"location\": {\n            \"place_name\": \"Statue of Liberty\",\n            \"place_details\": \"Iconic landmark and symbol of freedom\",\n            \"place_image_url\": \"https://www.nps.gov/stli/learn/photosmultimedia/statue-of-liberty.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.6892,\n              \"longitude\": -74.0445\n            },\n            \"ticket_pricing\": \"Ferry tickets start at $20\",\n            \"time_to_travel\": \"1 hour (including ferry ride)\"\n          }\n        },\n        {\n          \"time\": \"08:00 PM\",\n          \"activity\": \"Dinner at Per Se\",\n          \"location\": {\n            \"place_name\": \"Per Se\",\n            \"place_details\": \"Michelin-starred restaurant known for its innovative tasting menus\",\n            \"place_image_url\": \"https://www.thomaskeeller.com/wp-content/uploads/2016/02/Per-Se-Restaurant.jpg\",\n            \"geo_coordinates\": {\n              \"latitude\": 40.7636,\n              \"longitude\": -73.9804\n            },\n            \"ticket_pricing\": \"N/A\",\n            \"time_to_travel\": \"30 minutes\"\n          }\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is just a suggestion and can be customized to fit your family's interests and preferences.\n* Ticket prices are approximate and may vary.\n* Travel times are estimates and may vary depending on traffic and other factors.\n* This itinerary assumes a flight from Los Angeles to New York City. You can replace this with your preferred departure city.\n* Be sure to book your flights and hotel accommodations in advance, especially if traveling during peak season.\n* Consider purchasing a CityPASS for access to popular attractions at a discounted rate.\n* Have fun and enjoy your luxurious trip to New York City! \n"},
            ],
          },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

