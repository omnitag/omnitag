import {client} from 'i13n-client';
import {win} from 'win-doc';
import {getOverWrite} from './tagBase';

client(win().i13nData, (configs, cb) => cb(configs, getOverWrite()));
