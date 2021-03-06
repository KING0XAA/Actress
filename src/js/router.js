import _ from 'lodash';
import page from 'page';
import Ui from './ui.js';
import { Data } from './data.js'
import NProgress from 'nprogress'

var init = function () {
    import(
        /* webpackChunkName: "view" */
        './view.js').then(View => {
        page.base('/Actress/');

        var actressPage = function (ctx) {
            console.log("route:actressRoute", ctx);
            View.init(ctx.params.id);
        };
        page('actress/:id', actressPage);
        page('/actress/:id', actressPage);

        var langPage = function (ctx) {
            console.log("route:langRoute", ctx);
            Ui.setLang(ctx.params.lang);
            page.redirect('/');
        };
        page('lang/:lang', langPage);
        page.exit('lang/:lang', function () {
            location.reload();
        });
        page('/lang/:lang', langPage);
        page.exit('/lang/:lang', function () {
            location.reload();
        });

        var serverPage = function (ctx) {
            console.log("route:server", ctx);
            Data.setCurrentServer(ctx.params.server);
            page.redirect('/');
        };
        page('/server/:server', serverPage);
        page.exit('/server/:server', function () {
            NProgress.start();
            Data.init().then(function () {
                NProgress.done();
                location.reload();
            });
        });

        var forceInitPage = function (ctx) {
            console.log("route:forceInit", ctx);
            page.redirect('/');
        };
        page('/init/force', forceInitPage);
        page.exit('/init/force', function () {
            NProgress.start();
            Data.init().then(function () {
                NProgress.done();
                location.reload()
            });
        });

        page('/', function () {
            console.log("route:homeRoute");
            View.init();
        });

        page('*', function (ctx) {
            console.log("route:notMatchRoute", ctx);
            page.redirect('/');
        });
        page.start({ hashbang: true });
    });
};

export { init };
export default { init };