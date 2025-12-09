import sys
import logging
from frontend_app.config import Config
from frontend_app.app import create_app

def main():
    config = Config()
    app = create_app(config)
    if len(sys.argv) > 1 and sys.argv[1] == 'run':
        app.run(host='0.0.0.0', port=config.PORT, debug=config.DEBUG)
    else:
        logging.info('Application initialized')
        logging.info('Use "python main.py run" to start the server')

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    main()