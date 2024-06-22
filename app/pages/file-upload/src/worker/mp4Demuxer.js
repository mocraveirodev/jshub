export default class MP4Demuxer {
    #onConfig
    #onChunk
    #file
    /**
     * 
     * @param {ReadableStream} stream 
     * @param {object} options 
     * @param {(config: object) => void} options.onConfig
     * 
     * @returns {Promise<void>}
     */
    async run(stream, { onConfig, onChunk }) {
        this.#onConfig = onConfig
        this.#onChunk = onChunk
        this.#file = new File([], 'mp4')
    }
}