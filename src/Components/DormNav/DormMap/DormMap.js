import React, { useEffect, useState } from "react";
import imageMapResize from 'image-map-resizer';

export const DormMap = ({ setShowPopup, setClickedArea, map, activeTab, activeFloor }) => {
    const [dormMap, setDormMap] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleAreaClick = (areaInfo, event) => {
        event.preventDefault();
        setShowPopup(true);
        setClickedArea(areaInfo);
    };

    //update the image-map when resizing the window
    useEffect(() => {
        if (dormMap) {
            imageMapResize();
        }
    }, [activeTab, dormMap]);

    // update the map on render
    useEffect(() => {
        setLoading(true);
        import(`${map}`).then(image => {
            setDormMap(image.default);
            setLoading(false);
        }).catch(error => {
            console.error("Error loading image:", error);
            setLoading(false);
        });
    }, [map]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mapImageContainer">
            {dormMap && (
                <img src={dormMap} className="floorplan" useMap="#image-map" alt="dorm map" />
            )}
            {activeTab === "walker" && activeFloor===1 && (
                <map name="image-map">
                    <area target="" alt="652" title="652" href="" coords="112,99,49,18" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "652" }, event)} />
                    <area target="" alt="651" title="651" href="" coords="32,141,114,210" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "651" }, event)} />
                    <area target="" alt="650" title="650" href="" coords="33,278,111,212" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "650" }, event)} />
                    <area target="" alt="649" title="649" href="" coords="112,348,30,427" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "649" }, event)} />
                    <area target="" alt="648" title="648" href="" coords="114,503,32,432" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "648" }, event)} />
                    <area target="" alt="601" title="601" href="" coords="6,506,117,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "601" }, event)} />
                    <area target="" alt="602" title="602" href="" coords="6,621,119,702" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "602" }, event)} />
                    <area target="" alt="603" title="603" href="" coords="122,621,187,700" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "603" }, event)} />
                    <area target="" alt="604" title="604" href="" coords="193,621,253,702" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "604" }, event)} />
                    <area target="" alt="605" title="605" href="" coords="391,619,459,700" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "605" }, event)} />
                    <area target="" alt="606" title="606" href="" coords="392,503,454,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "606" }, event)} />
                    <area target="" alt="607" title="607" href="" coords="463,622,521,702" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "607" }, event)} />
                    <area target="" alt="608" title="608" href="" coords="462,506,522,590" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "608" }, event)} />
                    <area target="" alt="609" title="609" href="" coords="528,621,590,702" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "609" }, event)} />
                    <area target="" alt="610" title="610" href="" coords="596,623,655,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "610" }, event)} />
                    <area target="" alt="611" title="611" href="" coords="661,623,723,702" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "611" }, event)} />
                    <area target="" alt="612" title="612" href="" coords="860,585,920,507" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "612" }, event)} />
                    <area target="" alt="613" title="613" href="" coords="860,620,923,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "613" }, event)} />
                    <area target="" alt="614" title="614" href="" coords="923,507,991,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "614" }, event)} />
                    <area target="" alt="615" title="615" href="" coords="925,622,993,701" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "615" }, event)} />
                    <area target="" alt="616" title="616" href="" coords="996,618,1058,701" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "616" }, event)} />
                    <area target="" alt="617" title="617" href="" coords="1061,622,1127,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "617" }, event)} />
                    <area target="" alt="618" title="618" href="" coords="1130,623,1190,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "618" }, event)} />
                    <area target="" alt="619" title="619" href="" coords="1326,623,1396,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "619" }, event)} />
                    <area target="" alt="620" title="620" href="" coords="1328,505,1394,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "620" }, event)} />
                    <area target="" alt="621" title="621" href="" coords="1399,622,1461,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "621" }, event)} />
                    <area target="" alt="622" title="622" href="" coords="1396,504,1464,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "622" }, event)} />
                    <area target="" alt="623" title="623" href="" coords="1464,620,1532,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "623" }, event)} />
                    <area target="" alt="624" title="624" href="" coords="1448,402,1532,463" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "624" }, event)} />
                    <area target="" alt="625" title="625" href="" coords="1446,331,1532,395" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "625" }, event)} />
                    <area target="" alt="626" title="626" href="" coords="1451,198,1529,263" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "626" }, event)} />
                    <area target="" alt="627" title="627" href="" coords="1446,129,1529,192" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "627" }, event)} />
                    <area target="" alt="628" title="628" href="" coords="1059,399,1139,459" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "628" }, event)} />
                    <area target="" alt="629" title="629" href="" coords="1064,330,1140,396" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "629" }, event)} />
                    <area target="" alt="630" title="630" href="" coords="1061,199,1140,260" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "630" }, event)} />
                    <area target="" alt="631" title="631" href="" coords="1061,128,1139,192" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "631" }, event)} />
                    <area target="" alt="632" title="632" href="" coords="980,400,1053,463" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "632" }, event)} />
                    <area target="" alt="633" title="633" href="" coords="977,331,1061,397" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "633" }, event)} />
                    <area target="" alt="634" title="634" href="" coords="975,198,1058,261" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "634" }, event)} />
                    <area target="" alt="635" title="635" href="" coords="975,132,1058,193" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "635" }, event)} />
                    <area target="" alt="636" title="636" href="" coords="593,399,674,460" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "636" }, event)} />
                    <area target="" alt="637" title="637" href="" coords="593,332,676,397" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "637" }, event)} />
                    <area target="" alt="638" title="638" href="" coords="595,201,672,261" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "638" }, event)} />
                    <area target="" alt="639" title="639" href="" coords="593,129,676,195" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "639" }, event)} />
                    <area target="" alt="640" title="640" href="" coords="512,403,593,460" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "640" }, event)} />
                    <area target="" alt="641" title="641" href="" coords="509,336,588,398" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "641" }, event)} />
                    <area target="" alt="642" title="642" href="" coords="507,200,590,263" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "642" }, event)} />
                    <area target="" alt="643" title="643" href="" coords="507,126,590,196" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "643" }, event)} />
                    <area target="" alt="644" title="644" href="" coords="119,435,193,503" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "644" }, event)} />
                    <area target="" alt="645" title="645" href="" coords="117,349,197,425" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "645" }, event)} />
                    <area target="" alt="646" title="646" href="" coords="116,213,197,278" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "646" }, event)} />
                    <area target="" alt="647" title="647" href="" coords="119,138,197,211" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "647" }, event)} />
                    <area target="" alt="653" title="653" href="" coords="116,15,180,98" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "653" }, event)} />
                    <area target="" alt="654" title="654" href="" coords="524,14,587,87" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "654" }, event)} />
                    <area target="" alt="655" title="655" href="" coords="593,18,659,89" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "655" }, event)} />
                    <area target="" alt="656" title="656" href="" coords="986,18,1059,91" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "656" }, event)} />
                    <area target="" alt="657" title="657" href="" coords="1062,15,1130,92" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "657" }, event)} />
                </map>
            )}
            {activeTab === "walker" && activeFloor===2 && (
                <map name="image-map">
                    <area target="" alt="753" title="753" href="" coords="392,124,478,194" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "753" }, event)}/>
                    <area target="" alt="752" title="752" href="" coords="394,195,478,260" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "752" }, event)}/>
                    <area target="" alt="751" title="751" href="" coords="393,331,476,398" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "751" }, event)}/>
                    <area target="" alt="750" title="750" href="" coords="392,398,478,462" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "750" }, event)}/>
                    <area target="" alt="749" title="749" href="" coords="475,127,562,193" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "749" }, event)}/>
                    <area target="" alt="748" title="748" href="" coords="479,196,559,260" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "748" }, event)}/>
                    <area target="" alt="747" title="747" href="" coords="478,334,559,398" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "747" }, event)}/>
                    <area target="" alt="746" title="746" href="" coords="479,400,560,462" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "746" }, event)}/>
                    <area target="" alt="745" title="745" href="" coords="860,127,943,198" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "745" }, event)}/>
                    <area target="" alt="744" title="744" href="" coords="859,198,942,262" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "744" }, event)}/>
                    <area target="" alt="743" title="743" href="" coords="860,334,943,400" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "743" }, event)}/>
                    <area target="" alt="742" title="742" href="" coords="862,398,943,462" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "742" }, event)}/>
                    <area target="" alt="741" title="741" href="" coords="945,129,1026,198" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "741" }, event)}/>
                    <area target="" alt="740" title="740" href="" coords="945,198,1027,263" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "740" }, event)}/>
                    <area target="" alt="739" title="739" href="" coords="945,331,1026,400" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "739" }, event)}/>
                    <area target="" alt="738" title="738" href="" coords="945,401,1027,464" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "738" }, event)}/>
                    <area target="" alt="737" title="737" href="" coords="1332,127,1416,196" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "737" }, event)}/>
                    <area target="" alt="736" title="736" href="" coords="1330,198,1415,262" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "736" }, event)}/>
                    <area target="" alt="735" title="735" href="" coords="1333,334,1416,400" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "735" }, event)}/>
                    <area target="" alt="734" title="734" href="" coords="1332,401,1416,464" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "734" }, event)}/>
                    <area target="" alt="733" title="733" href="" coords="1350,620,1416,706" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "733" }, event)}/>
                    <area target="" alt="732" title="732" href="" coords="1280,507,1349,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "732" }, event)}/>
                    <area target="" alt="731" title="731" href="" coords="1280,622,1347,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "731" }, event)}/>
                    <area target="" alt="730" title="730" href="" coords="1212,507,1278,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "730" }, event)}/>
                    <area target="" alt="729" title="729" href="" coords="1212,622,1278,706" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "729" }, event)}/>
                    <area target="" alt="728" title="728" href="" coords="1145,507,1211,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "728" }, event)}/>
                    <area target="" alt="727" title="727" href="" coords="1076,622,1145,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "727" }, event)}/>
                    <area target="" alt="726" title="726" href="" coords="1076,504,1145,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "726" }, event)}/>
                    <area target="" alt="725" title="725" href="" coords="1012,620,1076,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "725" }, event)}/>
                    <area target="" alt="724" title="724" href="" coords="1010,505,1075,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "724" }, event)}/>
                    <area target="" alt="723" title="723" href="" coords="948,622,1013,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "723" }, event)}/>
                    <area target="" alt="722" title="722" href="" coords="880,622,945,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "722" }, event)}/>
                    <area target="" alt="721" title="721" href="" coords="811,622,877,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "721" }, event)}/>
                    <area target="" alt="720" title="720" href="" coords="810,507,876,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "720" }, event)}/>
                    <area target="" alt="719" title="719" href="" coords="744,620,810,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "719" }, event)}/>
                    <area target="" alt="718" title="718" href="" coords="744,507,808,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "718" }, event)}/>
                    <area target="" alt="717" title="717" href="" coords="675,505,742,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "717" }, event)}/>
                    <area target="" alt="716" title="716" href="" coords="611,507,674,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "716" }, event)}/>
                    <area target="" alt="715" title="715" href="" coords="611,620,677,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "715" }, event)}/>
                    <area target="" alt="714" title="714" href="" coords="543,507,608,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "714" }, event)}/>
                    <area target="" alt="713" title="713" href="" coords="543,622,609,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "713" }, event)}/>
                    <area target="" alt="712" title="712" href="" coords="478,622,543,706" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "712" }, event)}/>
                    <area target="" alt="711" title="711" href="" coords="410,620,478,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "711" }, event)}/>
                    <area target="" alt="710" title="710" href="" coords="344,507,409,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "710" }, event)}/>
                    <area target="" alt="709" title="709" href="" coords="344,622,409,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "709" }, event)}/>
                    <area target="" alt="708" title="708" href="" coords="277,507,343,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "708" }, event)}/>
                    <area target="" alt="707" title="707" href="" coords="277,620,341,703" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "707" }, event)}/>
                    <area target="" alt="706" title="706" href="" coords="208,507,274,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "706" }, event)}/>
                    <area target="" alt="705" title="705" href="" coords="210,620,277,704" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "705" }, event)}/>
                    <area target="" alt="704" title="704" href="" coords="145,507,208,589" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "704" }, event)}/>
                    <area target="" alt="703" title="703" href="" coords="73,620,144,706" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "703" }, event)}/>
                    <area target="" alt="702" title="702" href="" coords="80,508,142,588" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "702" }, event)}/>
                    <area target="" alt="701" title="701" href="" coords="5,622,72,706" shape="rect" onClick={(event) => handleAreaClick({ building: "Walker", roomNumber: "701" }, event)}/>
                </map>
            )}

        </div>
    );
}