# Django and React Image Uploading Example
Resource used: https://dev.to/thomz/uploading-images-to-django-rest-framework-from-forms-in-react-3jhj

This is an example application that demonstrates how to upload images using Django and React.

## Getting Started

### Prerequisites

- Node.js
- Python 3
- Django 3.x
- Django REST Framework
- django-cors-headers
- Pillow

### Installation

1. Clone the repository:
git clone https://github.com/dtulpa16/ReactDjangoImgUpload

2. Install the required Python packages:
```powershell
cd backend
```
```powershell
pipenv install
```
```powershell
pipenv shell
```

3. Add local_settings.py to drf_jwt_backend folder w/ appropriate database name
```python
 # SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'shhhhItsASecret'

# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'mysql.connector.django',
        'NAME': 'db_name',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        'OPTIONS': {
            'autocommit': True
        }
    }
}
```
4. Migrate
```powershell
python manage.py migrate
```

5. Run server
```powershell
python manage.py runserver
```

6. Split terminal

7. Navigate to Frontend
```powershell 
cd frontend
```

8.Install Node Modules
```powershell
npm i
```

9. Run React Server
```powershell
npm start
```
