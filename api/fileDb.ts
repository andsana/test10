import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Post, PostWithoutId,} from './types';

const filename = './db.json';
let data: Post[] = [];

const fileDb = {
    async init() {
        try {
            const fileContenst = await fs.readFile(filename);
            data = JSON.parse(fileContenst.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: PostWithoutId) {
        const id = crypto.randomUUID();
        const post = {id, ...item};
        data.push(post);
        await this.save();

        return post;
    },
    async getItemById(id: string): Promise<Post | undefined> {
        return data.find(post => post.id === id);
    },
    async deleteItem(id: string): Promise<void> {
        data = data.filter(post => post.id !== id);
        await this.save();
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data));
    },
};

export default fileDb;