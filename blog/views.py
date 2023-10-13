from django.http import FileResponse
from django.shortcuts import render


def home(request):
    return render(request, 'home.html')


def download_resume(request):
    filename = 'CV_Andrii_Demchenko.pdf'
    resume_path = f'downloaded/{filename}'
    file_response = open(resume_path, 'rb')
    return FileResponse(file_response, filename=filename)
