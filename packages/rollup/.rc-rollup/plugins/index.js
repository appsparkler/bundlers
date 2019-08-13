import babel from './babel'
import resolve from './resolve'
import html from './html'
import peerDepsExternal from './peer-deps-external'

const PLUGINS = [
    babel,
    resolve,
    html,
    // peerDepsExternal
];

export default PLUGINS;
