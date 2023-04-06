const image4 = '<img src="https://drive.google.com/uc?id=1eDpKoktcapx-xm5TSpjnKNyOm-Cp99re" />'

const image8 = '<img src="https://drive.google.com/uc?id=1eK-GPynCt3XkY5uWv-6qfXtgd5JnzO-4" />'

const image12 = '<img src="https://drive.google.com/uc?id=1eNfrTSrgS2TKOMweueD8LHCmJv2CvKBo" />'

const image16 = '<img src="https://drive.google.com/uc?id=1eRNcDOAq0Zui-Gi0sgQ5ujUew0aIZmSm" />'

const image20 = '<img src="https://drive.google.com/uc?id=1eSyFppJRJC_nYikJUx7Fz26pFx8iXuVZ" />'

const image24 = '<img src="https://drive.google.com/uc?id=1f-vObJAG0-lKp9cdZEBbLMVLrJ5BeHwQ" />'

const image28 = '<img src="https://drive.google.com/uc?id=1eVa5KDFOz3FkAX1I2BNQh54t-MR5bac8" />'

const image32 = '<img src="https://drive.google.com/uc?id=1esM327Vs3tCy-65I5UXu0eEuWnrdx7_n" />'

const image36 = '<img src="https://drive.google.com/uc?id=1euck95qVQNPNlhVHL2udHshsBl10iaI-" />'

function setImage(imageHtml) {
    $('#bottom').empty().prepend(imageHtml)
}

$('.Four').on('click', function () {
    setImage(image4)
})

$('.Eight').on('click', function () {
    setImage(image8)
})

$('.Twelve').on('click', function () {
    setImage(image12)
})

$('.Sixteen').on('click', function () {
    setImage(image16)
})

$('.Twenty').on('click', function () {
    setImage(image20)
})

$('.TwentyFour').on('click', function () {
    setImage(image24)
})

$('.TwentyEight').on('click', function () {
    setImage(image28)
})

$('.ThirtyTwo').on('click', function () {
    setImage(image32)
})

$('.ThirtySix').on('click', function () {
    setImage(image36)
})