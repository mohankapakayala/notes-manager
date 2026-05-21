from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import User
from .serializers import UserSerializer

# Create your views here.

@api_view(['GET'])
def get_users(request):
    users=User.objects.all()
    serializers=UserSerializer(users,many=True)
    print("GET Api data"+str(serializers.data))
    return Response(serializers.data)