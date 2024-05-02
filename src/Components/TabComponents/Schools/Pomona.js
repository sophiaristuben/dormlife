import React, { useState } from "react";
import { DormNav } from "../../DormNav/DormNav";

export const Pomona = () => {
    const [activeTab, setActiveTab] = useState("mapbox");
    const [activeFloor, setActiveFloor] = useState(1);
    const [showPopup, setShowPopup] = useState(false);

    const pomonaDorms = {
        "walker": {
            dormName: "Walker",
            dormInfo: "Walker Hall provides the largest lounge on campus, as well as laundry and kitchen facilities for 112 residents. The residence hall faces Honnold library to the north. A large grassy area to the north and east, called Walker Beach, provides a good place to play Frisbee, study or sunbathe. The main lounge area has a baby grand piano and a television. Laundry facilities are in the basement. Most of the rooms in Walker are singles arranged along two main hallways. Walker wings are adjacent to Walker's main halls. The Walker wing rooms are singles and two-room doubles, and have outside entrances from small courtyards. Walker was completely renovated during the summer of 1999 and is a smoke free building.", 
            mapImage: ["./WalkerFloor1.png", "./WalkerFloor2.png"] 
        },
        "blaisdell": {
            dormName: "Blaisdell",
            dormInfo: "Mudd-Blaisdell, the largest residence hall on South Campus, houses more than 280 students in singles and one-room doubles. It is situated around a grassy courtyard and is adjacent to tennis courts and a swimming pool. Two large central lounges provide students with a break from hall life. Other facilities in the residence hall include two kitchens, a conference room, two laundry rooms in the basement and a sun deck on the roof. Mostly first-year students occupy the one-room doubles. Mudd-Blaisdell was completely renovated and air conditioning was installed during the summers of 2000 and 2001.", 
           mapImage: ["./BlaisdellFloor1.png"],
        },
        "clark1": {
            dormName: "Clark 1",
            dormInfo: "Clark I was completely renovated during the summers of 2001 and 2002 and houses 116 students, primarily juniors and seniors. Clark I is a smoke free building with two floors and is located immediately north of Frary Dining Hall. Most rooms in Clark I are two-room doubles and open to courtyard entrances. There are two five-person suites for a more communal living environment. Clark I has laundry facilities on the ground floor.", 
            mapImage: ["./ClarkI1.png", "./ClarkI2.png"]
        },
        "clark3": {
            dormName: "Clark III",
            dormInfo: "Norton-Clark III, renovated during the summer of 2009, is actually two separate residence halls that were joined together, but each has unique features. Norton has 34 single rooms on two floors. It is L-shaped, bordering a small courtyard. Clark III has three floors with a mixture of singles and one room doubles on short hallways. Part of the building surrounds a courtyard and the other runs parallel to Sixth Street and Bixby Plaza. Norton-Clark III houses 120 students, primarily juniors and seniors, and is situated above three social rooms.  Norton-Clark III is a smoke free building.", 
            mapImage: ["./ClarkIII1.png", "./ClarkIII2.png", "./ClarkIII3.png"]
        },
        "clark5": {
            dormName: "Clark V",
            dormInfo: "Clark V, renovated during the summer of 2003, is home to 95 students, primarily seniors. There is a combination of singles on short hallways and two person suites with separate entrances. ", 
            mapImage: ["./ClarkV1.png", "./ClarkV2.png"]
        },
        "dialynas": {
            dormName: "Dialynas",
            dormInfo: "Dialynas Hall has 78 bedrooms in suite-style arrangements, with three to six bedrooms. Each of the three floors has a large common area with full kitchen. The suites have air conditioning that turns off when windows are opened and low water use fixtures. The building, which opened in 2011 and is certified LEED Platinum, has solar hot water heating, solar voltaic panels and an electricity cutoff switch for each suite, among its sustainable features. Its first floor lounge features a drop-down movie screen.", 
            mapImage: ["./Dialynas1.png", "./Dialynas2.png", "./Dialynas3.png"]
        },
        "gibson": {
            dormName: "Gibson",
            dormInfo: "Gibson Hall houses 36 students in 21 rooms.  Completed in 2005 and nestled in the courtyard behind Mudd Blaisdell, Gibson provides residents’ air conditioning and spacious rooms and a short walk to Pendleton Pool.  Gibson was named after former Dean of Woman Jessie Gibson who had a very distinguished career while at Pomona.  She is credited with starting the Sponsor Program, a chapter of the Mortar Board and she was instrumental in raising the funds to rebuild the College’s retreat center (Halona) in Idyllwild, California.", 
            mapImage: ["./Gibson1.png"]
        },
        "harwood": {
            dormName: "Harwood",
            dormInfo: "Harwood Court is the oldest residence hall on South Campus. Built in 1921, it was most recently renovated in 2010 to provide modern facilities, upgrade the plumbing and electrical systems, improve sustainability, and to preserve the original charm of the building. Harwood is arranged around a central courtyard and houses 170 students. The residence hall has a large main lounge area with its own kitchen, television room and grand piano. Laundry facilities are in the basement. Both single and double rooms are available and primarily first-year students and sophomores live there. ", 
            mapImage: ["./ResHall-FloorPlan-Harwood 1-1.png", "./ResHall-FloorPlan-Harwood 2-1.png", "./ResHall-FloorPlan-Harwood 3-1.png", "./ResHall-FloorPlan-Harwood 0-1.png"]
        },
        "lawry": {
            dormName: "Lawry",
            dormInfo: "Lawry Court, built in the early 1980s, is one of the more unique buildings. It consists of three separate towers, each with three floors. Each floor has eight single rooms situated around a lounge and bathroom facilities. Lawry is next to Walton Commons, where the laundry facility is located. Lawry is a smoke free building.",
            mapImage: ["./Lawry123.png"]
        },
        "lyon": {
            dormName: "Lyon",
            dormInfo: "Lyon Court, a 76-bed residence hall, was completed in 1990 and partially renovated in 1998 and 2004. It primarily houses first-year students. There is a comfortable lounge, a kitchen, study rooms and laundry facilities. Lyon Court is located on South Campus with easy access to Pendleton Pool and Wig Beach. The rooms in Lyon Court are quite large and most are one-room doubles.",
            mapImage: ["./LyonFloor1.png", "./LyonFloor2.png"]
        },
        "mudd": {
            dormName: "Mudd",
            dormInfo: "Walker Hall is located on North Campus directly across from Clark 5.",
            mapImage: ["./MuddBlaisdell1.png", "./MuddBlaisdell2.png", "./MuddBlaisdell34.png", "./MuddBlaisdell34.png"]
        },
        "norton": {
            dormName: "Norton",
            dormInfo: "Norton-Clark III, renovated during the summer of 2009, is actually two separate residence halls that were joined together, but each has unique features. Norton has 34 single rooms on two floors. It is L-shaped, bordering a small courtyard. Clark III has three floors with a mixture of singles and one room doubles on short hallways. Part of the building surrounds a courtyard and the other runs parallel to Sixth Street and Bixby Plaza. Norton-Clark III houses 120 students, primarily juniors and seniors, and is situated above three social rooms.  Norton-Clark III is a smoke free building.",
            mapImage: ["./Norton1.png"]
        },
        "oldenborg": {
            dormName: "Oldenborg",
            dormInfo: "Oldenborg Center for Modern Languages and International Relations offers a unique living and academic experience to its 140 residents. The Center provides language sections in Spanish, French, German, Russian, Japanese, and Mandarin Chinese, directed by graduate student language residents who are native speakers of their languages. Residents representing a wide range of academic concentrations participate in a program emphasizing foreign languages and international relations. The formal requirements for living in Oldenborg include a year's study of a foreign language on the college level (or the equivalent) and a willingness to join in the Center's extracurricular activities. Oldenborg was recently completely renovated and has air-conditioning, as well as a dining hall and colloquia room.",
            mapImage: ["./Oldenborg1.png", "./Oldenborg23.png"]
        },
        "smiley": {
            dormName: "Smiley",
            dormInfo: "Albert K. Smiley Hall, built in 1908 and completely renovated in 1990, is the oldest residence hall on campus. Smiley houses 60 students, all in singles. Residents have the use of a lounge and laundry room. Smiley is centrally located and residents have easy access to Smith Campus Center; the new Center for Athletics; and both North and South Campus facilities.",
            mapImage: ["./Smiley12.png"]
        },
        "sontag": {
            dormName: "Sontag",
            dormInfo: "Sontag Hall has 76 bedrooms in suite-style arrangements of three to six bedrooms on three floors. Each of the three floors has a large common area with full kitchen and Energy Star appliances. Suites in the LEED Platinum building have air conditioning, operable windows, daylight sensors, electrical cut-off switches and low water use fixtures. The building also has a rooftop garden patio, solar hot water heating and solar voltaic panels on the roof.",
            mapImage: ["./Sontag1.png", "./Sontag2.png", "./Sontag3.png"]
        },
        "wig": {
            dormName: "Wig",
            dormInfo: "Wig Hall, renovated during the summer of 1993, is a three-story residence hall that houses primarily first-year students and sophomores. Most of the 113 students live in one-room doubles. There are a few singles and one three-person apartment. Wig has a large lounge that contains a piano and a television and is adjacent to a small patio. A central kitchen is available for preparing snacks or for special events such as birthday parties and study breaks. Laundry facilities are in the basement. Just south of the residence hall is a large grassy area known as 'Wig Beach,' which includes a softball field as well as volleyball and basketball courts. The Pendleton Swimming Pool borders one side of Wig Beach.",
            mapImage: ["./Wig1.png", "./Wig2.png"]
        }

    };


    const dormIds = Object.keys(pomonaDorms);

    const changeFloor = (floor) => {
        setActiveFloor(floor);
        setShowPopup(false);
    };

    return (
        <>
            <div className="floorNav">
                {activeTab !== "mapbox" && activeTab === "walker" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "blaisdell" && (
                    <></>
                )}
                {activeTab !== "mapbox" && activeTab === "clark1" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "clark3" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "clark5" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "dialynas" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "gibson" && (
                    <>
                        <button className={activeFloor === 0 ? "active" : ""} onClick={() => changeFloor(0)}>Floor 0</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "harwood" && (
                    <>
                        <button className={activeFloor === 0 ? "active" : ""} onClick={() => changeFloor(0)}>Floor 0</button>
                        <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                        <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                        <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "lyon" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "mudd" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    <button className={activeFloor === 4 ? "active" : ""} onClick={() => changeFloor(4)}>Floor 4</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "oldenborg" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "smiley" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "sontag" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    <button className={activeFloor === 3 ? "active" : ""} onClick={() => changeFloor(3)}>Floor 3</button>
                    </>
                )}
                {activeTab !== "mapbox" && activeTab === "wig" && (
                    <>
                    <button className={activeFloor === 1 ? "active" : ""} onClick={() => changeFloor(1)}>Floor 1</button>
                    <button className={activeFloor === 2 ? "active" : ""} onClick={() => changeFloor(2)}>Floor 2</button>
                    </>
                )}
            </div>
            <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pomonaDorms} dormIds={dormIds} activeFloor={activeFloor} setActiveFloor={setActiveFloor} showPopup={showPopup} setShowPopup={setShowPopup} />
            {/* <DormNav activeTab={activeTab} setActiveTab={setActiveTab} dormList={pomonaDorms} dormIds={dormIds} /> */}
        </>
    );
}