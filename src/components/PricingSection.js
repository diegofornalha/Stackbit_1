export default function PricingSection(props) {
    return (
        <section>
            <Pricing />
        </section>
    )
}

import React from 'react'

class Pricing extends React.Component {
    state = {
        priceInputValue: '0',
        isYearly: false,
        priceInput: {
            0: '1',
            1: '2',
            2: '3',
            3: '4',
            4: '5',
            5: '6',
            6: '7',
            7: '8',
            8: '9',
            9: '10',
            10: '11',
            11: '12',
            12: '13',
            13: '14',
            14: '15',
            15: '16',
            16: '17',
            17: '18',
            18: '19',
            19: '20',
            20: '20+'
        },
        priceOutput: {
            plan1: {
                0: ['/hó + ÁFA', '2% jutalék'],
                1: ['Ft', '9000', '/hó'],
                2: ['Ft', '12000', '/hó'],
                3: ['Ft', '14000', '/hó'],
                4: ['Ft', '16000', '/hó'],
                5: ['Ft', '18000', '/hó'],
                6: ['Ft', '20000', '/hó'],
                7: ['Ft', '22000', '/hó'],
                8: ['Ft', '24000', '/hó'],
                9: ['Ft', '26000', '/hó'],
                10: ['Ft', '28000', '/hó'],
                11: ['Ft', '30000', '/hó'],
                12: ['Ft', '32000', '/hó'],
                13: ['Ft', '34000', '/hó'],
                14: ['Ft', '36000', '/hó'],
                15: ['Ft', '38000', '/hó'],
                16: ['Ft', '40000', '/hó'],
                17: ['Ft', '42000', '/hó'],
                18: ['Ft', '44000', '/hó'],
                19: ['Ft', '46000', '/hó'],
                20: ['', 'Írjon nekünk', '']
            },
            plan2: {
                0: ['+2% jutalék', '2 000 Ft', '/hó+ÁFA'],
                1: ['Ft', '7200', '/hó'],
                2: ['Ft', '9600', '/hó'],
                3: ['Ft', '11200', '/hó'],
                4: ['Ft', '12800', '/hó'],
                5: ['Ft', '14400', '/hó'],
                6: ['Ft', '16000', '/hó'],
                7: ['Ft', '17600', '/hó'],
                8: ['Ft', '19200', '/hó'],
                9: ['Ft', '20800', '/hó'],
                10: ['Ft', '22400', '/hó'],
                11: ['Ft', '24000', '/hó'],
                12: ['Ft', '25600', '/hó'],
                13: ['Ft', '27200', '/hó'],
                14: ['Ft', '28800', '/hó'],
                15: ['Ft', '30400', '/hó'],
                16: ['Ft', '32000', '/hó'],
                17: ['Ft', '33600', '/hó'],
                18: ['Ft', '35200', '/hó'],
                19: ['Ft', '36800', '/hó'],
                20: ['', 'Írjon nekünk', '']
            }
        }
    }

    slider = React.createRef()
    sliderValue = React.createRef()

    componentDidMount() {
        this.slider.current.setAttribute('min', 0)
        this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1)
        this.thumbSize = parseInt(
            window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'),
            10
        )
        this.handleSliderValuePosition(this.slider.current)
    }

    handlePricingSlide = (e) => {
        this.setState({ priceInputValue: e.target.value })
        this.handleSliderValuePosition(e.target)
    }

    handleSliderValuePosition = (input) => {
        const multiplier = input.value / input.max
        const thumbOffset = this.thumbSize * multiplier
        const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2
        this.sliderValue.current.style.left =
            input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px'
    }

    getPricingData = (obj, pos) => {
        return pos !== undefined
            ? obj[this.state.priceInputValue][pos]
            : obj[this.state.priceInputValue]
    }

    render() {
        return (
            <div className='pricing'>
                <h2 className='text-center'>Áraink</h2>
                {/* <div className='flex justify-center items-center mb-6 mt-3'>

                    <span class="mr-3 text-gray-900 text-sm font-medium">Havi</span>
                    <label for="toggle-example" class="flex items-center cursor-pointer relative">
                        <input type="checkbox" id="toggle-example" class="sr-only" onChange={(e) => this.setState({ isYearly: e.target.checked })} checked={this.state.isYearly} />
                        <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
                        <span class="ml-3 text-gray-900 text-sm font-medium">Éves</span>
                    </label>
                </div> */}

                <div className='pricing-slider center-content'>
                    <label className='form-slider'>
                        <span>Külön értékesített lakóegységek száma</span>
                        <input
                            type='range'
                            ref={this.slider}
                            defaultValue={this.state.priceInputValue}
                            onChange={this.handlePricingSlide}
                        />
                    </label>
                    <div ref={this.sliderValue} className='pricing-slider-value'>
                        {this.getPricingData(this.state.priceInput)}
                    </div>
                </div>

                <div className='pricing-items'>

                    <div className='pricing-item'>
                        <div className='pricing-item-inner'>
                            <div className='pricing-item-content'>
                                <div className='pricing-item-header center-content'>
                                    <div className='pricing-item-title'>Prémium csomag</div>
                                    <div className='pricing-item-price'>
                                        <span className='pricing-item-price-amount mr-1'>
                                            {this.getPricingData(this.state.isYearly ? this.state.priceOutput.plan2 : this.state.priceOutput.plan1, 1)}
                                        </span>
                                        <span className='pricing-item-price-currency'>
                                            {this.getPricingData(this.state.isYearly ? this.state.priceOutput.plan2 : this.state.priceOutput.plan1, 0)}
                                        </span>
                                        {this.getPricingData(this.state.isYearly ? this.state.priceOutput.plan2 : this.state.priceOutput.plan1, 2)}
                                    </div>
                                    <div className='sb-markdown text-left mt-4'>
                                        <p>A jutalék csak az Appartmanon keresztül megvalósult foglalásokra vonatkozik</p>
                                    </div>
                                    
                                    <h6 className='text-center'>14 nap ingyenes próbaidő</h6>
                                </div>
                                <div className='pricing-item-features'>
                                    <ul className='pricing-item-features-list'>
                                        <li className='is-checked'>Több szálláshely és szoba egy helyen</li>
                                        <li className='is-checked'>Naprakész naptár</li>
                                        <li className='is-checked'>Foglalási szabályok</li>
                                        <li className='is-checked'>
                                            Szezonális és kiemelt időszaki árazás
                                        </li>
                                        <li className='is-checked'>Testreszabható automatikus emailek</li>
                                        <li className='is-checked'>Extra szolgáltatások</li>
                                        <li className='is-checked'>Magyar nyelvű támogatás</li>
                                        <li className='is-checked'>
                                            iCal naptárszinkron
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pricing-item-cta'>
                                <a className='button' href='http://foglalas.appartman.hu/register'>
                                    Ingyenes regisztráció
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='pricing-item'>
                        <div className='pricing-item-inner'>
                            <div className='pricing-item-content'>
                                <div className='pricing-item-header center-content'>
                                    <div className='pricing-item-title'>Alap csomag</div>
                                    <div className='pricing-item-price'>
                                        <span className='pricing-item-price-amount'>
                                            {/* {this.getPricingData(this.state.priceOutput.plan1, 1)} */}
                                            Ingyenes
                                        </span>
                                    </div>
                                    <div className='sb-markdown text-left mt-4'>
                                        <p>Az ingyenes verzió a próbaidő lejártával automatikusan lép érvénybe.</p>
                                    </div>
                                </div>
                                <div className='pricing-item-features'>
                                    <ul className='pricing-item-features-list'>
                                        <li className='is-checked'>Foglaltsági naptár</li>
                                        <li className='is-checked'>Admin felület</li>
                                        <li className='is-checked'>Képek feltöltése</li>
                                        <li className='is-checked'>
                                            Mobilbarát és modern kialakítás
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='pricing-item-cta'>
                                <a className='button' href='http://foglalas.appartman.hu/register/'>
                                    Ingyenes regisztráció
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
