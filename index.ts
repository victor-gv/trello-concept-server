import app from './server'
import config from './config/config'
import connect from './db/connect'

connect().then(async function onsServerInit() {
    config.logger.info('DB connected')

    app.listen(config.app.PORT, () => {
        config.logger.info(`Server running at http://localhost:${config.app.PORT}`)
    })
})