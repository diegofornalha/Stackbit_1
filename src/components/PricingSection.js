import './PricingSection.module.css'

export default function PricingSection(props) {
    return <section>
        <Pricing />
    </section>
}

import React from "react";

class Pricing extends React.Component {
    state = {
        priceInputValue: "1",
        priceInput: {
            0: "1",
            1: "2",
            2: "3",
            3: "4",
            4: "5",
            5: "6",
            6: "7",
            7: "8",
            8: "9",
            9: "10",
            10: "11",
            11: "12",
            12: "13",
            13: "14",
            14: "15",
            15: "16",
            16: "17",
            17: "18",
            18: "19",
            19: "20",
            20: "20+",
        },
        priceOutput: {
            plan1: {
                0: ["Ft", "5000", "/hó"],
                1: ["Ft", "9000", "/hó"],
                2: ["Ft", "12000", "/hó"],
                3: ["Ft", "14000", "/hó"],
                4: ["Ft", "16000", "/hó"],
                5: ["Ft", "18000", "/hó"],
                6: ["Ft", "20000", "/hó"],
                7: ["Ft", "22000", "/hó"],
                8: ["Ft", "24000", "/hó"],
                9: ["Ft", "26000", "/hó"],
                10: ["Ft", "28000", "/hó"],
                11: ["Ft", "30000", "/hó"],
                12: ["Ft", "32000", "/hó"],
                13: ["Ft", "34000", "/hó"],
                14: ["Ft", "36000", "/hó"],
                15: ["Ft", "38000", "/hó"],
                16: ["Ft", "40000", "/hó"],
                17: ["Ft", "42000", "/hó"],
                18: ["Ft", "44000", "/hó"],
                19: ["Ft", "46000", "/hó"],
                20: ["", "Írjon nekünk"]
            },
            plan2: {
                0: ["Ft", "13", "/hó"],
                1: ["Ft", "17", "/hó"],
                2: ["Ft", "21", "/hó"],
                3: ["Ft", "25", "/hó"],
                4: ["Ft", "42", "/hó"],
                5: ["Ft", "58", "/hó"],
                6: ["Ft", "117", "/hó"],
                7: ["Ft", "208", "/hó"],
                8: ["Ft", "333", "/hó"],
                9: ["", "Contact Us", ""]
            }
        }
    };

    slider = React.createRef();
    sliderValue = React.createRef();

    componentDidMount() {
        this.slider.current.setAttribute("min", 0);
        this.slider.current.setAttribute(
            "max",
            Object.keys(this.state.priceInput).length - 1
        );
        this.thumbSize = parseInt(
            window
                .getComputedStyle(this.sliderValue.current)
                .getPropertyValue("--thumb-size"),
            10
        );
        this.handleSliderValuePosition(this.slider.current);
    }

    handlePricingSlide = e => {
        this.setState({ priceInputValue: e.target.value });
        this.handleSliderValuePosition(e.target);
    };

    handleSliderValuePosition = input => {
        const multiplier = input.value / input.max;
        const thumbOffset = this.thumbSize * multiplier;
        const priceInputOffset =
            (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
        this.sliderValue.current.style.left =
            input.clientWidth * multiplier - thumbOffset + priceInputOffset + "px";
    };

    getPricingData = (obj, pos) => {
        return pos !== undefined
            ? obj[this.state.priceInputValue][pos]
            : obj[this.state.priceInputValue];
    };

    render() {
        return (
            <div className="pricing">
                <div className="pricing-slider center-content">
                    <label className="form-slider">
                        <span>Hány lakóegység</span>
                        <input
                            type="range"
                            ref={this.slider}
                            defaultValue={this.state.priceInputValue}
                            onChange={this.handlePricingSlide}
                        />
                    </label>
                    <div ref={this.sliderValue} className="pricing-slider-value">
                        {this.getPricingData(this.state.priceInput)}
                    </div>
                </div>

                <div className="pricing-items">
                    <div className="pricing-item">
                        <div className="pricing-item-inner">
                            <div className="pricing-item-content">
                                <div className="pricing-item-header center-content">
                                    <div className="pricing-item-title">Basic</div>
                                    <div className="pricing-item-price">
                                        <span className="pricing-item-price-amount">
                                            {this.getPricingData(this.state.priceOutput.plan1, 1)}
                                        </span>
                                        <span className="pricing-item-price-currency">
                                            {this.getPricingData(this.state.priceOutput.plan1, 0)}
                                        </span>
                                        {this.getPricingData(this.state.priceOutput.plan1, 2)}
                                    </div>
                                </div>
                                <div className="pricing-item-features">
                                    <ul className="pricing-item-features-list">
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li>Excepteur sint occaecat</li>
                                        <li>Excepteur sint occaecat</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-item-cta">
                                <a className="button" href="http://cruip.com/">
                                    Buy Now
                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-item">
                        <div className="pricing-item-inner">
                            <div className="pricing-item-content">
                                <div className="pricing-item-header center-content">
                                    <div className="pricing-item-title">Advanced</div>
                                    <div className="pricing-item-price">
                                        <span className="pricing-item-price-amount">
                                            {this.getPricingData(this.state.priceOutput.plan2, 1)}
                                        </span>
                                        <span className="pricing-item-price-currency">
                                            {this.getPricingData(this.state.priceOutput.plan2, 0)}
                                        </span>
                                        {this.getPricingData(this.state.priceOutput.plan2, 2)}
                                    </div>
                                </div>
                                <div className="pricing-item-features">
                                    <ul className="pricing-item-features-list">
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                        <li className="is-checked">Excepteur sint occaecat</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="pricing-item-cta">
                                <a className="button" href="http://cruip.com/">
                                    Buy Now
                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

