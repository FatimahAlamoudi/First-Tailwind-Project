module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': '#2F2F2F',
        'blue': '#70A0BB',
        'nav': 'rgba(255,255,255,.23)',
        'btn': 'linear-gradient(#FFFFFF, #70A0BB);'
      },
      fontFamily: {
        'cairo': ["'Cairo'", 'san-serif'],
      },

      backgroundImage: {
        'background-image': 'url("../dist/img/heroImg.png")',
        'background-image-product1' : 'url("../dist/img/project1.jpg")',
        'background-image-product2' : 'url("../dist/img/project2.jpg")',
        'background-image-product3' : 'url("../dist/img/project3.jpg")',
        'background-image-product4' : 'url("../dist/img/project4.jpg")',
        'background-image-product5' : 'url("../dist/img/project5.jpg")',
      }
    },
  },
  plugins: [],
}
