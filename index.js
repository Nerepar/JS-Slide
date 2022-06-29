class slider {
    currentSlide = 1;
    maxSlide = 6;

    activePrefix = '-active';

    slideClassName = 'Slider__container';
    activeSlideClassName = this.slideClassName + activePrefix;

    buttonSlidePrefix = 'Slider-button__';
    buttonBackClassName = this.buttonSlidePrefix + 'back';
    buttonNextClassName = this.buttonSlidePrefix + 'next';

    controlPanelButtonClassName = 'Slider-controlPanel__button';
    activeControlButtonClassName = this.controlPanelButtonClassName + activePrefix;

    _createSelector(name,isID = false) {
        return (isID ? '#' : '.') + name;
    }


}