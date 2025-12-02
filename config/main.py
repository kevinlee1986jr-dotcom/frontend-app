import sys
import logging
from frontend_app.config import Config
from frontend_app.app import create_app

def main():
    try:
        # Initialize logging
        logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
        
        # Create application instance
        app = create_app(Config)
        
        # Run the application
        app.run(host='0.0.0.0', port=5000)
    except Exception as e:
        logging.error(f"An error occurred: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()