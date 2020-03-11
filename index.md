<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Appointment Avaiability Checker</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</head>

<body>
    <div class="wrapper">
        <h1>Global Entry Reservation Finder</h1>
        <p class="instrucs">Below there are two inputs. Select a location to see appoints for that enrollment center. Use the Date field if you want audio to play if an appointment comes available before the date you type in.
        </p>
        <div class="flex-outer">
            <div class="flex-inner">
                <label for="last-day">Notification Date (ex: Nov 01, 2020)</label>
                <input type="datetime" name="last day to notify" id="last-day">
            </div>
            <div class="flex-inner">
                <label for="enrollment-center">Choose an Enrollment Center:</label>
                <select name="Enrollment Centers" id="enrollment-center">
                    <option data-address="Albuquerque International Sunport 2200 Sunport Blvd SE Albuquerque NM 87106"
                        value="8040">Albuquerque Enrollment Center</option>
                    <option data-address="Ted Stevens International Airport 4600 Postmark Drive RM NA 207 Anchorage"
                        value="7540">Anchorage Enrollment Center</option>
                    <option data-address="2600 Maynard H.Jackson Jr.Int'l Terminal Maynard H. Jackson Jr. Blvd."
                        value="5182">Atlanta International Global Entry Enrollment Center</option>
                    <option data-address="157 Tradeport Drive Suite C Atlanta GA 30354 US" value="5200">Atlanta Port
                        Office Global Entry Enrollment Center</option>
                    <option data-address="3600 Presidential Blvd.Austin" value="7820">Austin - Bergstrom International
                        Airport</option>
                    <option
                        data-address="Baltimore Washington Thurgood Marshall I Lower Level Door 18 Linthicum MD 21240"
                        value="7940">Baltimore Enrollment Center</option>
                    <option data-address="8115 Birch Bay Square St.Suite 104 Blaine WA 98230 US" value="13321">Blaine
                        Global Entry Enrollment Center</option>
                    <option data-address="4655 S Enterprise Street Boise ID 83705 US" value="12161">Boise Enrollment
                        Center</option>
                    <option data-address="10 Causeway Street Room 812 Boston MA 02222 US" value="14221">Boston - Tip
                        O'Neill Federal Building</option>
                    <option data-address="Logan International Airport Terminal E East Boston MA 02128" value="5441">
                        Boston - Logan Global Entry Enrollment Center</option>
                    <option data-address="3300 South Expressway 77 83 Veterans International Bridge - Los Tomates"
                        value="5003">Brownsville Enrollment Center</option>
                    <option data-address="10 CENTRAL AVENUE FORT ERIE ON L2A1G6 CA" value="5022">Buffalo - Ft.Erie
                        Enrollment Center</option>
                    <option data-address="1699 E.Carr Rd PO BOX 632 Calexico CA 92231 US" value="5006">Calexico
                        Enrollment Center</option>
                    <option data-address="2000 Airport Rd N.E.Calgary AB T2E6W5 CA" value="5030">Calgary Enrollment
                        Center</option>
                    <option data-address="237 West Service Road Champlain NY 12919 US" value="13801">Champlain Global
                        Entry Enrollment Center</option>
                    <option data-address="5501 Charlotte - Douglas International Airport Josh Birmingham Parkway"
                        value="14321">Charlotte - Douglas - DOWNSTAIRS LOCATION</option>
                    <option data-address="5501 Charlotte - Douglas International Airport Josh Birmingham Parkway"
                        value="6880">Charlotte - Douglas International Airport</option>
                    <option data-address="610 Closed until further notice Closed until futher notice Chicago"
                        value="11981">Chicago Field Office Enrollment Center</option>
                    <option data-address="10000 Bessie Coleman Drive Terminal 5 Lower Level Chicago" value="5183">
                        Chicago O'Hare International Global Entry Enrollment Center</option>
                    <option data-address="4243 Olympic Blvd.Suite. 210 Erlanger KY 41018 US" value="7680">Cincinnati
                        Enrollment Center</option>
                    <option data-address="Customs & Border Protection 6747 Engle Road Middleburg Heights" value="9180">
                        Cleveland U.S.Customs and Border Protection</option>
                    <option data-address="DFW International Airport - Terminal D DFW Airport TX 75261" value="5300">
                        Dallas - Fort Worth Intl Airport Global Entry</option>
                    <option data-address="8400 Denver International Airport Pena Boulevard Denver CO 80249 US"
                        value="6940">Denver International Airport</option>
                    <option data-address="84 Main Street Derby Line VT 08530 US" value="5223">Derby Line Enrollment
                        Center</option>
                    <option data-address="2810 WEST FORT STREET BUILDING B DETROIT MI 48226 US" value="5023">Detroit
                        Enrollment Center</option>
                    <option data-address="601 Detroit North Terminal Rogell Dr.Suite 1271 Detroit MI 48242"
                        value="5320">Detroit Metro Airport Global Entry</option>
                    <option data-address="Hamad International Airport Doha QA" value="6920">Doha International Airport
                    </option>
                    <option data-address="1012 G Avenue Suite 107 Douglas AZ 85607 US" value="8100">Douglas Enrollment
                        Center</option>
                    <option data-address="1000 Airport Road Edmonton International Airport Edmonton AB T9E0V3 CA"
                        value="5032">Edmonton Enrollment Center</option>
                    <option data-address="797 S.Zaragoza Rd.Bldg.A El Paso TX 79907 US" value="5005">El Paso Enrollment
                        Center</option>
                    <option data-address="6450 Airport Way - Suite 13 Room 1320A Fairbanks AK 99709 US" value="14381">
                        Fairbanks Enrollment Center</option>
                    <option data-address="1800 Eller Drive Suite 104 Ft Lauderdale FL 33316 US" value="5443">Fort
                        Lauderdale Global Entry Enrollment Center</option>
                    <option data-address="9403 E Highway 61 Grand Portage MN 55605 US" value="9101">Grand Portage
                    </option>
                    <option data-address="355 Chalan PasaHeru Suite B 224 - B Tamuning GU 96913 US" value="9140">Guam
                        International Airport</option>
                    <option data-address="Gulfport - Biloxi International Airport 14035 Airport Road" value="14481">
                        Gulfport - Biloxi Global Entry Enrollment Center</option>
                    <option
                        data-address="U.S.Customs and Border Protection 1 Bell Boulevard Comp 1666 Halifax Intl Airport"
                        value="5031">Halifax Enrollment Center</option>
                    <option data-address="5911 SOUTH STEWART RD MISSION TX 78572 US" value="5001">Hidalgo Enrollment
                        Center</option>
                    <option data-address="300 Rodgers Blvd Honolulu HI 96819 US" value="5340">Honolulu Enrollment Center
                    </option>
                    <option data-address="1403 Route 95 Belleville NB E7M4Z9 CA" value="5101">Houlton Enrollment Center
                    </option>
                    <option data-address="500 McKinney St.Houston TX 77002 US" value="7620">Houston Central Library
                    </option>
                    <option data-address="3870 North Terminal Road Terminal E Houston TX 77032 US" value="5141">Houston
                        Intercontinental Global Entry Enrollment Center</option>
                    <option data-address="Sterile Corridor requires Boarding Pass IAH Terminal E" value="7480">Houston
                        Term E - BOARDING PASS REQUIRED TO ENT</option>
                    <option data-address="312 Highway 11 East International Falls MN 56649 US" value="5160">
                        International Falls Enrollment Center</option>
                    <option data-address="312 Highway 11 East International Falls MN 56649" value="14181">International
                        Falls Global Entry Enrollment Center</option>
                    <option data-address="JFK International Airport Terminal 4 IAT Jamaica NY 11430 US" value="5140">JFK
                        International Global Entry Enrollment Center</option>
                    <option data-address="90 Beirut Circle Terminal C Gate 90 Kansas City MO 64153 US" value="12781">
                        Kansas City Enrollment Center</option>
                    <option data-address="664 Highway 137 Hill Island Lansdowne ON K0E1L0 CA" value="5520">Lansdowne ON
                    </option>
                    <option data-address="0 Lincoln Juarez Bridge Bldg.2 Laredo TX 780443130 US" value="5004">Laredo
                        Enrollment Center</option>
                    <option data-address="5757 Wayne Newton Blvd Terminal 3 Las Vegas NV 89119 US" value="5360">Las
                        Vegas Enrollment Center</option>
                    <option data-address="24 Grosvenor Square US Embassy London W1A 2LQ GB" value="13561">London - US
                        Embassy</option>
                    <option data-address="301 E.Ocean Blvd Room 805 Long Beach CA 90802 US" value="8920">Los Angeles -
                        Long Beach Seaport</option>
                    <option data-address="380 World Way Tom Bradley International Terminal Los Angeles" value="5180">Los
                        Angeles International Global Entry Enrollment Center</option>
                    <option data-address="2491 Winchester Suite 230 Memphis TN 38116 US" value="13621">Memphis
                        International Airport Global Enrollment Ce</option>
                    <option data-address="4200 NW 21st Street Miami International Airport Conc." value="5181">Miami
                        International Global Entry Enrollment Center</option>
                    <option data-address="4915 S Howell Ave. 2nd floor Milwaukee WI 53207 US" value="7740">Milwaukee
                        Enrollment Center</option>
                    <option data-address="4300 Glumack Drive St.Paul MN 55111 US" value="6840">Minneapolis - St.Paul
                        Global Entry Enrollment Center</option>
                    <option data-address="3300 69th Ave Quad Cities International Airport Moline IL 61265"
                        value="11000">Moline Quad Cities International Airport</option>
                    <option data-address="1 Pierre E Trudeau International Airport 975 Blvd Romeo Vachon.Room T1476"
                        value="5028">Montreal Enrollment Center</option>
                    <option data-address="612 Hangar Lane Suite 114 Nashville TN 37217 US" value="10260">Nashville
                        Enrollment Center</option>
                    <option data-address="900 Airline Drive Kenner LA 70062 US" value="9740">New Orleans Enrollment
                        Center</option>
                    <option data-address="Newark Liberty International Airport Terminal B - International Arrivals Area"
                        value="5444">Newark Global Entry Enrollment Center</option>
                    <option data-address="2250 WHIRLPOOL ST.NIAGARA FALLS NY 14305 US" value="5161">Niagara Falls
                        Enrollment Center</option>
                    <option data-address="9 N.GRAND AVENUE NOGALES AZ 85621 US" value="5007">Nogales Enrollment Center
                    </option>
                    <option data-address="1 Orlando International Airport Airport Blvd Orlando FL 32827" value="5380">
                        Orlando Global Entry Enrollment Center</option>
                    <option data-address="140 Thad Johnson Private Suite 102 Ottawa Cargo Services Ottawa ON K1V0R4"
                        value="5025">Ottawa Enrollment Center</option>
                    <option data-address="10980 Interstate 29 N Pembina ND 58271 US" value="5100">Pembina Enrollment
                        Center</option>
                    <option data-address="5701 W.Smithville Road Suite 700 Bartonville IL 61607 US" value="11002">Peoria
                        International Airport</option>
                    <option data-address="PHILADELPHIA INTL AIRPORT TERMINAL A WEST 3RD FLOOR PHILADELPHIA"
                        value="5445">Philadelphia Global Entry Enrollment Center</option>
                    <option data-address="CBP - Global Enrollment Center 3400 E.Sky Harbor Blvd" value="7160">Phoenix
                        Sky Harbor Global Entry Enrollment Center</option>
                    <option data-address="1000 Airport Boulevard Ticketing Level Pittsburgh PA 15231 US" value="9200">
                        Pittsburgh International Airport</option>
                    <option data-address="709 S.E.Catawba Road Port Clinton OH 43452 US" value="11841">Port Clinton Ohio
                        Enrollment Center</option>
                    <option data-address="2321 NEXUS Enrollment Center Pine Grove Ave.Port Huron MI 48060 US"
                        value="5024">Port Huron Enrollment Center</option>
                    <option data-address="7000 PDX AIRPORT Room T3352 Portland OR 97218 US" value="7960">Portland OR
                        Enrollment Center</option>
                    <option data-address="50 Airport Drive Chicago Rockford International Airport Rockford"
                        value="11001">Rockford - Chicago International Airport</option>
                    <option data-address="3850 West Terminal Dr International Arrivals Terminal Salt Lake City"
                        value="7600">Salt Lake City International Airport</option>
                    <option data-address="9800 Airport Boulevard Suite 1101 San Antonio TX 78216 US" value="7520">San
                        Antonio International Airport</option>
                    <option data-address="2500 Paseo Internacional San Diego CA 92154 US" value="5002">San Diego - Otay
                        Mesa Enrollment Center</option>
                    <option data-address="3707 N Harbor Drive San Diego CA 92101 US" value="13541">San Diego
                        International Airport</option>
                    <option data-address="San Francisco International Airport San Francisco CA 94128" value="5446">San
                        Francisco Global Entry Enrollment Center</option>
                    <option data-address="Luis Munoz Marin Int'l Airport Carolina PR 00937 US" value="5400">San Juan
                        Global Entry Enrollment Center</option>
                    <option data-address="0 SLU II Global Enrollment Center 1375 South Avenue E San Luis AZ 85349"
                        value="5460">San Luis Enrollment Center</option>
                    <option data-address="405 VIRGINIA AVE SAN YSIDRO CA 92173 US" value="8060">San Ysidro Enrollment
                        Center</option>
                    <option data-address="1100 Red Cleveland Blvd Sanford FL 32773 US" value="5447">Sanford Global Entry
                        Enrollment Center</option>
                    <option data-address="900 International Bridge Plaza Sault Ste.Marie MI 49783 US" value="5080">Sault
                        Ste Marie Enrollment Center</option>
                    <option data-address="CBP Global Entry Office SeaTac International Airport Seattle" value="5420">
                        SeaTac International Airport Global Entry Enrollment Center</option>
                    <option
                        data-address="7277 PERIMETER ROAD SOUTH RM 116 KING COUNTY INTERNATIONAL AIRPORT BOEING FIELD"
                        value="5040">Seattle Urban Enrollment Center</option>
                    <option data-address="U.S.Embassy 27 Napier Road Singapore SG" value="9040">Singapore U.S.Embassy
                    </option>
                    <option data-address="10701 Lambert Intl Blvd Terminal 2 St.Louis MO 63145 US" value="12021">
                        St.Louis Enrollment Center</option>
                    <option data-address="39825 FAST Enrollment Center 39825 Interstate 15 North Sweetgrass MT 59484"
                        value="5120">Sweetgrass Enrollment Center</option>
                    <option data-address="Tampa International Airport 4100 George J Bean Outbound Pkwy Tampa FL 33607"
                        value="8020">Tampa Enrollment Center</option>
                    <option data-address="6301 Silver Dart Drive Terminal One - Depatures Level Mississauga ON L5P1B2"
                        value="5027">Toronto Enrollment Center</option>
                    <option data-address="2935 Convair Drive Airport Emergency Support Centre Mississauga ON L5P1B2"
                        value="12421">Toronto Enrollment Center AESC</option>
                    <option data-address="7150 S.Tucson Blvd Tucson AZ 85756 US" value="9240">Tucson Enrollment Center
                    </option>
                    <option data-address="1 BOWLING GREEN NEW YORK NY 10004 US" value="6480">U.S.Custom House - Bowling
                        Green NY</option>
                    <option data-address="3211 Grant McConachie Way Vancouver International Airport Richmond BC V7B1Y9"
                        value="5026">Vancouver Enrollment Center</option>
                    <option data-address="1611 Main Street 4th Floor VANCOUVER BC V6A2W5 CA" value="5041">Vancouver
                        Urban Enrollment Center</option>
                    <option data-address="41059 Warroad Enrollment Center State Hwy 313 N Warroad MN 56763 US"
                        value="5060">Warroad Enrollment Center</option>
                    <option data-address="Warwick RI Enrollment Center 300 Jefferson Boulevard Suite 106 Warwick"
                        value="9300">Warwick RI Enrollment Center</option>
                    <option data-address="22685 International Arrivals - Main Terminal Washingto" value="5142">
                        Washington Dulles International Enrollment Center</option>
                    <option data-address="1300 Pennsylvania Avenue NW Washington DC 20229 USvalue" value="8120">
                        Washington DC Enrollment Center</option>
                    <option
                        data-address="West Palm Beach Enrollment Center 1 East 11th Street Third Floor Riviera Beach"
                        value="9260">West Palm Beach Enrollment Center</option>
                    <option data-address="1970 Winnipeg NEXUS Office Wellington Room 1074 Winnipeg MB R3H0E3 CA"
                        value="5029">Winnipeg Enrollment Center</option>
                </select>
            </div>
        </div>
        <div class="main">
            <!-- add stuff here -->
            <span>
                <a target="_blank" href="https://ttp.cbp.dhs.gov/">Add a data and select an Enrollment Center</a>
            </span>
        </div>
        <div class="address"></div>
        <div class="counter-container">
            <h4>Checking everytime the colors change :)</h4>
            <!-- <span class="counter">10</span> -->
        </div>
    </div>
</body>
<script src="./index.js"></script>
<link rel="stylesheet" href="./style.css">

</html>