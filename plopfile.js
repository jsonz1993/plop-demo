

module.exports = function plopGenerator(plop) {
  plop.setGenerator('components', {
    description: '创建一个components组件',
    prompts: [{
      type: 'input',
      name: 'name',
      message: '输入组件名',
    }],
    actions: [{
      type: 'addMany',
      destination: 'src/components/{{name}}/',
      base: '.plop-templates/component/',
      templateFiles: '.plop-templates/component/**',
    }],
  })

  plop.setGenerator('page', {
    description: '普通页面',
    prompts: [{
      type: 'input',
      name: 'name',
      message: '输入页面名',
    }],
    actions: [{
      type: 'addMany',
      destination: 'src/page/{{name}}/',
      base: '.plop-templates/page/',
      templateFiles: '.plop-templates/page/**',
    }, {
      type: 'modify',
      path: 'src/router/index.ts',
      pattern: /(\/\/ @@@@@代码自动生成注释1 请勿删除@@@@@)/gi,
      template: `const {{ properCase name}} = lazy(() => import('../page/{{name}}/index'));\n$1`,
    }, {
      type: 'modify',
      path: 'src/router/index.ts',
      pattern: /(\/\/ @@@@@代码自动生成注释2 请勿删除@@@@@)/gi,
      template: `{
    path: '/{{dashCase name}}',
    component: {{properCase name}},
    name: '{{properCase name}}',
  },\n\t$1`
    }]
  })

  plop.setGenerator('module', {
    description: '模块，包括列表页、详情页、表单页',
    prompts: [{
      type: 'input',
      name: 'name',
      message: '输入模块名',
    }],
    actions: [{
      type: 'addMany',
      destination: 'src/module/{{name}}/',
      base: '.plop-templates/module/',
      templateFiles: '.plop-templates/module/**',
    }, {
      type: 'modify',
      path: 'src/router/index.tsx',
      pattern: /(\/\/ @@@@@代码自动生成注释1 请勿删除@@@@@)/gi,
      template: `const {{ properCase name}} = lazy(() => import('../module/{{name}}/list'));
const {{ properCase name}}Detail = lazy(() => import('../module/{{name}}/detail'));
const {{ properCase name}}Form = lazy(() => import('../module/{{name}}/form'));
$1`,
    }, {
      type: 'modify',
      path: 'src/router/index.tsx',
      pattern: /(\/\/ @@@@@代码自动生成注释2 请勿删除@@@@@)/gi,
      template: `{
    path: '/{{dashCase name}}',
    children: [{
      path: '/{{dashCase name}}/list',
      element: <{{properCase name}} />
    }, {
      path: '/{{dashCase name}}/detail',
      element: <{{properCase name}}Detail />
    }, {
      path: '/{{dashCase name}}/form',
      element: <{{properCase name}}Form />
    }]
  },\n\t$1`
    }]
  })
}
