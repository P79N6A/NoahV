/* eslint-disable*/
export default [
    {
        path: '/nvbaseui',
        component: r => require.ensure([], () => r(require('./components/baseUIDemo.vue')), 'baseui')
    },
    {
        path: '/nvtable',
        component: r => require.ensure([], () => r(require('./components/table/tableDemo.vue')), 'table')
    },
    {
        path: '/nvfiltertable',
        component: r => require.ensure([], () => r(require('./components/table/filterTableDemo.vue')), 'filtertable')
    },
    {
        path: '/nvform',
        component: r => require.ensure([], () => r(require('./components/form/formDemo.vue')), 'form')
    },
    {
        path: '/nvicon',
        component: r => require.ensure([], () => r(require('./components/icon/icon.vue')), 'icon')
    },
    {
        path: '/nvtree',
        component: r => require.ensure([], () => r(require('./components/tree/tree.vue')), 'tree')
    },
    {
        path: '/nvdatepicker',
        component: r => require.ensure([], () => r(require('./components/datePicker/datepicker.vue')), 'datepicker')
    },
    {
        path: '/nvchart',
        component: r => require.ensure([], () => r(require('./components/chart/chartDemo.vue')), 'chart')
    },
    {
        path: '/nvtrend',
        component: r => require.ensure([], () => r(require('./components/chart/trendDemo.vue')), 'trend')
    },
    {
        path: '/nvcontrasttrend',
        component: r => require.ensure([], () => r(require('./components/chart/contrastTrendDemo.vue')), 'contrasttrend')
    },
    {
        path: '/nvlist',
        component: r => require.ensure([], () => r(require('./components/list/list.vue')), 'list')
    },
    {
        path: '/nvdialog',
        component: r => require.ensure([], () => r(require('./components/dialog/dialog.vue')), 'dialog')
    },
    {
        path: '/nvswitch',
        component: r => require.ensure([], () => r(require('./components/switch/switch.vue')), 'switch')
    },
    {
        path: '/nvbutton',
        component: r => require.ensure([], () => r(require('./components/button/button.vue')), 'button')
    },
    {
        path: '/nvtextline',
        component: r => require.ensure([], () => r(require('./components/textLine/textLine.vue')), 'textline')
    },
    {
        path: '/nvsteps',
        component: r => require.ensure([], () => r(require('./components/steps/steps.vue')), 'steps')
    },
    {
        path: '/nvsearch',
        component: r => require.ensure([], () => r(require('./components/search/search.vue')), 'search')
    },
    {
        path: '/nvtag',
        component: r => require.ensure([], () => r(require('./components/tag/tag.vue')), 'tag')
    },
    {
        path: '/nv404',
        component: r => require.ensure([], () => r(require('./components/404/404.vue')), '404')
    }
];