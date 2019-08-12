import babel from 'rollup-plugin-babel'

export default babel({
  presets:[
    ["@babel/preset-env", { modules: false }]
  ]
})
