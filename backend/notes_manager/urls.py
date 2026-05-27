
from django.urls import path
from .views import get_notes,create_note,delete_note

urlpatterns = [
    path('', get_notes),
    path('add/', create_note),
    path('delete/<int:id>/', delete_note),
]
