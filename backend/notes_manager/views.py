from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import  Note
from .serializers import  NoteSerializer

# Create your views here.

@api_view(['GET'])
def get_notes(request):
    notes=Note.objects.all()
    serializer=NoteSerializer(notes,many=True)
    print("GET Api data"+str(serializer.data))
    return Response(serializer.data)



@api_view(['POST'])
def create_note(request):
    serializer=NoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


