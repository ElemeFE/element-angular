export default [
// 安装
`
# install cli
npm i element-theme -g

`,

// init
`
# init
et -i FILE_NAME
`,

`
:root {

  /* Colors
  -------------------------- */
  --color-primary: #20a0ff;
  --color-success: #13ce66;
  --color-warning: #f7ba2a;
  --color-danger: #ff4949;
  --color-info: #50BFFF;
  --color-blue: #2e90fe;
  --color-blue-light: #5da9ff;
  --color-blue-lighter: rgba(var(--color-blue), 0.12);
  --color-white: #fff;
  --color-black: #000;
  --color-grey: #C0CCDA;
`,

// var
`
# edit
--color-primary: red;
`,

// build
`
# build
et
> ✔ build theme font
> ✔ build element theme
`,

`
import '../theme/index.css'
`,
]
