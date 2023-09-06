import { Plugin } from 'obsidian';

export default class FolderAsTagPlugin extends Plugin {
    async onload() {
        this.registerEvent(
            this.app.workspace.on('file-open', async (file) => {
                if (file.extension === 'md') {
                    const metadataCache = this.app.metadataCache.getFileCache(file);
                    if (metadataCache && !metadataCache.tags) {
                        const folderPath = file.path.split('/');
                        let tags = [];
                        // Agrega solo la etiqueta más profunda
                        const tag = `#${folderPath.slice(0, folderPath.length - 1).join('/')}`;
                        tags.push(tag);
                        const fileContent = await this.app.vault.read(file);
                        await this.app.vault.modify(file, `${tags.join(' ')}\n${fileContent}`);
                    }
                } 
            })
        );
    } 
}
