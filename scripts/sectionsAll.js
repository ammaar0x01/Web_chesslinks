/*
ALL SECTIONS/ LAYERS
*/


const body = document.querySelector("body")
const reference = `<!-- code from sectionsAll.js-->`
// -------------------------------

const section1 = `\n
<!-- layer 1; m -->
<section class="white center" id="layer1">
    <div>
        <div class="prompt2">
            <p>Given: 1, 1, 2, 4, 7,.. </p>
            <p>Evaluate &sum;<sup>16</sup><sub>n=1</sub></p>
        </div>
        <input id="ans1" type="text">
        <p id="for-response1"></p>

        <div id="block1" class="productDarkColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=pNCOA8AUxdw" target="_blank">
                        link 2<sup>1</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>
</section>
`

const section2 = `\n
<section class="black center" id="layer2">
    <div>
        <div class="prompt1">
            <p>ABC = 24</p>
            <p>B = 3</p>
            <p>C = (ABC) / (AB)</p>
            <p>D = A + B</p>
            <br>
            <p>What is AB...Z?</p>
        </div>
        <input id="ans2" type="text">
        <p id="for-response2"></p>

        <div id="block2" class="productLightColor">
            <ul>
                <li>
                    <!-- math -->
                    <a href="https://www.youtube.com/watch?v=IGGnn9oa4QY" target="_blank">
                        link 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
        
    </div>
</section>
`

const section3 = `\n
<!-- layer 3; m -->
<section class="black center" id="layer3">
    <div>
        <div class="prompt1">
            <p>Solve for x in: </p>
            <p><i>x<sup>2</sup> - 6x = 0; where x > 0</i></p>
        </div>
        <input id="ans3" type="text">
        <p id="for-response3"></p>

        <div id="block3" class="productLightColor">
            <ul>
                <li>
                    <!-- math; calc -->
                    <a href="https://www.youtube.com/watch?v=I3GWzXRectE" target="_blank">
                        link 2<sup>1</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>
</section>
`

const section4 = `\n
<!-- layer 4, higa bga -->
<section class="white center" id="layer4">
    <div>
        <div class="prompt2">
            <p>Given: &fnof;(r) = (r<sup>2</sup> - r)/2</p>
            <p>Determine the position of '190' in the sequence</p>
        </div>
        <input id="ans4" type="text">
        <p id="for-response4"></p>

        <div id="block4" class="productDarkColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=gw6WIU5AF7k&list=PLRU-B1PBK4BsokzugGNzmR-NiD4E7JbMw&index=4"
                        target="_blank">
                        link 2<sup>2</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section5 = `\n
<!-- layer 5 -->
<section class="black center" id="layer5">
    <div>
        <div class="prompt1">
            <p>The volume of a rectangular box is 6m<sup>3</sup> </p>
            <p>The length is 3 times the width, and the product of the
                length and the width is 40m<sup>2</sup>
            </p>
            <P>Calculate the height of the box, in metres (exclude any measurements in the response)</P>
        </div>
        <input id="ans5" type="text">
        <p id="for-response5"></p>

        <div id="block5" class="productLightColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=S47lScH2Byg" target="_blank">
                        link 2<sup>2</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section6 = `\n
<!-- layer 6 -->
<section class="white center" id="layer6">
    <div>
        <div class="prompt2">
            <p>There is proof that 2 + 2 = 5</p>
            <p>Which line of the proof invalidates the above equation</p>
        </div>

        <div class="prompt2 btnContainer">
            <button class="prompt2 btnLight" onclick="gen1()">Generate</button>
            <p id="generate1"></p>
        </div>

        <input id="ans6" type="text">
        <p id="for-response6"></p>

        <div id="block6" class="productDarkColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=uBYzYji4rmE" target="_blank">
                        link 2<sup>2</sup> + 2<sup>1</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section7 = `\n
<!-- layer 7 -->
<section class="black center" id="layer7">
    <div>
        <div class="prompt1">
            <p>Anastasia decided to learn a new language. </p>
            <p>She started on the 1<sup>st</sup> of March 2020 and ended at the end of June 2020.</p>
            <p>On day 1 she studied for 10 minutes; day 2, 15 minutes; day 3, 20 minutes and so on.</p>
            <p>After 7 days on studying, she would restart her study time (day1 = day8; day2 = day9; etc)</p>
            <br>
            <p>Calculate the total time (in minutes) that Anastasia studied over this period of time.</p>
        </div>
        <input id="ans7" type="text">
        <p id="for-response7"></p>

        <div id="block7" class="productLightColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=vXTnsnqvEgE" target="_blank">
                        link 2<sup>2</sup> + 2<sup>1</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section8 = `\n
<!-- layer 8; m -->
<section class="white center" id="layer8">
    <div>
        <div class="prompt2">
            <p>A farmer was given 100m of a steel fence.</p>
            <p>He was given the opportunity to cultvate a rectangular piece of land.</p>
            <br>
            <p>Calculate the maximum area (in metres) that can be cultivated within the perimeter.</p>
        </div>
        <input id="ans8" type="text">
        <p id="for-response8"></p>

        <div id="block8" class="productDarkColor">
            <ul>
                <!-- math -->
                <li>
                    <a href="https://www.youtube.com/watch?v=mamH094uw_U" target="_blank">
                        link 2<sup>3</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section9 = `\n
<!-- layer 9 -->
<section class="white center" id="layer9">
    <div>
        <div class="prompt2">
            <p>
                Name the chemical process in which electrical energy is converted to
                chemical energy.
            </p>
        </div>
        <input id="ans9.1" type="text">
        <p id="for-response9.1"></p>

        <div class="prompt2">
            <p>
                Name the machine/appliance that converts mechanical energy into electrical energy.
            </p>
        </div>
        <input id="ans9.2" type="text">
        <p id="for-response9.2"></p>

        <div id="block9" class="productDarkColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/c/TheOrganicChemistryTutor" target="_blank">
                        link 2<sup>3</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section10 = `\n
<!-- layer 10, entertaining -->
<section class="black center" id="layer10">
    <div>
        <div class="prompt1">
            <p>
                What is the name of a non-sex chromosome?
            </p>
        </div>
        <input id="ans10" type="text">
        <p id="for-response10"></p>

        <div id="block10" class="productLightColor">

            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=N-RZIF9WCPg" target="_blank">
                        link 2<sup>3</sup> + 2<sup>1</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section11 = `\n
<!-- layer 11 -->
<section class="white center" id="layer11">
    <div>
        <div class="prompt2">
            <p>
                Name one process that occurs during the nutritional process in humans
                (journey of food through the alimentary canal)
            </p>
        </div>
        <input id="ans11" type="text">
        <p id="for-response11"></p>

        <div id="block11" class="productDarkColor">
            <ul>
                <li>
                    <!-- more images -->
                    <!-- 
                        https://www.researchgate.net/publication/338850455/figure/fig1/AS:852127857532929@1580174521883/A-generalized-healthy-diet-and-lifestyle-pyramid.ppm

                        
                        -->
                    <a href="https://wallpapercave.com/wp/wp2067480.jpg" target="_blank">
                        link 2<sup>3</sup> + 2<sup>1</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section12 = `\n
<!-- layer 12, entertaining -->
<section class="black center" id="layer12">
    <div>
        <div class="prompt1">
            <p>What component of the atom is responsible for the negative charge?</p>
        </div>
        <input id="ans12" type="text">
        <p id="for-response12"></p>

        <div id="block12" class="productLightColor">
            <ul>
                <li>
                    <!-- lickme -->
                    <a href="https://www.youtube.com/watch?v=Oes7xbiD_Wk" target="_blank">
                        link 2<sup>3</sup> + 2<sup>2</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section13 = `\n
<!-- layer 13 -->
<section class="white center" id="layer13">
    <div>
        <div class="prompt2">
            <p>
                What are the three main elements in fertilisers?
            </p>
        </div>
        <input id="ans13" type="text">
        <p id="for-response13"></p>

        <div id="block13" class="productDarkColor">
            <ul>
                <li>
                    <a href="https://blog.mystart.com/wp-content/uploads/shutterstock_352176329-e1527775515405.jpg"
                        target="_blank">
                        link 2<sup>3</sup> + 2<sup>2</sup>+ 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section14 = `\n
<!-- layer 14, entertaining -->
<section class="black center" id="layer14">
    <div>
        <div class="prompt1">
            <p>
                Are gamma rays more concentrated than microwaves?
            </p>
        </div>
        <input id="ans14-1" type="text">
        <p id="for-response14-1"></p>

        <br>
        <div class="prompt1">
            <p>
                Which type of light has the lowest frequency and longest wavelength?
                <!-- Do infrared light have longer wavelengths than radiowaves? -->
            </p>
        </div>
        <input id="ans14-2" type="text">
        <p id="for-response14-2"></p>

        <div id="block14" class="productLightColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=QuXhwhEFd68" target="_blank">
                        link 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>1</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>

    </div>
</section>
`

const section15 = `\n
<!-- layer 15 -->
<section class="white center" id="layer15">
    <div>
        <div class="prompt2">
            <p>
                What is the rate of work known as?
            </p>
        </div>
        <input id="ans15" type="text">
        <p id="for-response15"></p>

        <div id="block15" class="productDarkColor">
            <ul>
                <li>
                    <a href="" target="_blank">
                        link 2<sup>3</sup> + 2<sup>2</sup> + 2<sup>1</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>
</section>

`

const section16 = `\n
<!-- layer 16, higa -->
<section class="black center" id="layer16">
    <div>
        <div class="prompt1">
            <p>
                A car travels 1000 metres forward, then it turns right and travels for 500m,
                finally it turns left and travels for another 500m.
            </p>

            <br>
            <p>
                Calculate the displacement (in metres) of this trip.
                (round of answer to the nearest unit)
                <br>
                (draw a diagram to help solve the problem)
            </p>
        </div>
        <input id="ans16" type="text">
        <p id="for-response16"></p>

        <div id="block16" class="productLightColor">
            <ul>
                <li>
                    <a href="https://www.youtube.com/watch?v=UfKmSfgFxi8&list=PLRU-B1PBK4BtGCzekXM3L117aDEI6y1M3"
                        target="_blank">
                        link 2<sup>4</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>
</section>

`

const section17 = `\n
<!-- layer 17 -->
<section class="black center" id="layer17">
    <div>
        <div class="prompt1">
            <p>
                What is the ratio of the frequency
                of the note of the thirteenth key on a piano to
                the note of the first key on a piano?
                <br>
                (round of to the nearest unit)
            </p>
        </div>
        <input id="ans17" type="text">
        <p id="for-response17"></p>

        <div id="block17" class="productLightColor">
            <ul>
                <li>
                    <a href="https://pages.mtu.edu/~suits/notefreqs.html" target="_blank">
                        link 2<sup>4</sup> + 2<sup>0</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>
    </div>

</section>
`

const section18 = `\n
<!-- layer 18 -->
<section class="white center" id="layer18">
    <div>
        <div class="prompt2">
            <p>
                Which note is known as 'middle C'?
            </p>
        </div>
        <input id="ans18" type="text">
        <p id="for-response18"></p>

        <div id="block18" class="productDarkColor">
            <ul>
                <li>
                    <a href="https://www.onlinepianist.com/virtual-piano" target="_blank">
                        link 2<sup>4</sup> + 2<sup>1</sup>
                    </a>
                </li>
            </ul>
        </div>
        <a href="">Go back</a>

    </div>
</section>
`
// -------------------------------

const addSection = (section, layer) => {
    body.innerHTML += reference 
    body.innerHTML += section
    document.querySelector(layer).style.zIndex = "1"
}
// -------------------------------

// temp
// window.open("./_template.html", "_blank", "popup")
// let windowFeatures = "left=0, top=10, width=400, height=600"
// window.open("./_template.html", "_blank", windowFeatures)
// -------------------------------
