import React, { useEffect } from "react";
import imageMapResize from 'image-map-resizer';

export const DormMap = ({ setShowPopup, setClickedArea, map, activeTab }) => {
    const handleAreaClick = (areaInfo, event) => {
        event.preventDefault();
        console.log("hello");
        setShowPopup(true);
        setClickedArea(areaInfo);
    }
    useEffect(() => {
        imageMapResize();
        console.log(activeTab);
    }, []);
    return (
        <div className="mapImageContainer">
            <img src={map} className="floorplan" usemap="#image-map" alt="dorm map" />
            {activeTab === "walker" && (
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

        </div>
    );
}