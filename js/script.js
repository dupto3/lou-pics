const FourImage = '<img src="https://drive.google.com/uc?id=1eDpKoktcapx-xm5TSpjnKNyOm-Cp99re" />'

const EightImage = '<img src="https://drive.google.com/uc?id=1eK-GPynCt3XkY5uWv-6qfXtgd5JnzO-4" />'

const TwelveImage = '<img src="https://drive.google.com/uc?id=1eNfrTSrgS2TKOMweueD8LHCmJv2CvKBo" />'

const SixteenImage = '<img src="https://drive.google.com/uc?id=1eRNcDOAq0Zui-Gi0sgQ5ujUew0aIZmSm" />'

const TwentyImage = '<img src="https://drive.google.com/uc?id=1eSyFppJRJC_nYikJUx7Fz26pFx8iXuVZ" />'

const TwentyFourImage = '<img src="https://drive.google.com/uc?id=1f-vObJAG0-lKp9cdZEBbLMVLrJ5BeHwQ" />'

const TwentyEightImage = '<img src="https://drive.google.com/uc?id=1eVa5KDFOz3FkAX1I2BNQh54t-MR5bac8" />'

const ThirtyTwoImage = '<img src="https://drive.google.com/uc?id=1esM327Vs3tCy-65I5UXu0eEuWnrdx7_n" />'

const ThirtySixImage = '<img src="https://drive.google.com/uc?id=1euck95qVQNPNlhVHL2udHshsBl10iaI-" />'

function setImage(imageHtml) {
    $('#bottom').empty().prepend(imageHtml)
}

$('.Four').on('click', function () {
    setImage(FourImage)
})

$('.Eight').on('click', function () {
    setImage(EightImage)
})

$('.Twelve').on('click', function () {
    setImage(TwelveImage)
})

$('.Sixteen').on('click', function () {
    setImage(SixteenImage)
})

$('.Twenty').on('click', function () {
    setImage(TwentyImage)
})

$('.TwentyFour').on('click', function () {
    setImage(TwentyFourImage)
})

$('.TwentyEight').on('click', function () {
    setImage(TwentyEightImage)
})

$('.ThirtyTwo').on('click', function () {
    setImage(ThirtyTwoImage)
})

$('.ThirtySix').on('click', function () {
    setImage(ThirtySixImage)
})
