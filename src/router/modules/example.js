const example = [
    {
        path: '/example/message',
        component: () => import('../../views/examples/message.vue'),
        meta: { title: 'Message' }
    }, {
        path: '/example/loading',
        component: () => import('../../views/examples/loading.vue'),
        meta: { title: 'Loading' }
    }, {
        path: '/example/captcha',
        component: () => import('../../views/examples/captcha.vue'),
        meta: { title: 'Captcha' }
    }, {
        path: '/example/carousel',
        component: () => import('../../views/examples/carousel.vue'),
        meta: { title: 'Carousel' }
    }, {
        path: '/example/cascader',
        component: () => import('../../views/examples/cascader.vue'),
        meta: { title: 'Cascader' }
    }, {
        path: '/example/date-picker',
        component: () => import('../../views/examples/date-picker.vue'),
        meta: { title: 'Date Picker' }
    }, {
        path: '/example/directive',
        component: () => import('../../views/examples/directive.vue'),
        meta: { title: 'Directiver' }
    }, {
        path: '/example/lazyload',
        component: () => import('../../views/examples/lazyload.vue'),
        meta: { title: 'Lazyload' }
    }, {
        path: '/example/radio',
        component: () => import('../../views/examples/radio.vue'),
        meta: { title: 'Radio' }
    }, {
        path: '/example/scroll-number',
        component: () => import('../../views/examples/scroll-number.vue'),
        meta: { title: 'Scroll Number' }
    }, {
        path: '/example/select',
        component: () => import('../../views/examples/select.vue'),
        meta: { title: 'Select' }
    }
]

export default example
