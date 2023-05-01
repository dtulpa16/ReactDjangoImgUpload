from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Images
from .serializers import ImageSerializer
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.
@api_view(['GET'])
@permission_classes([AllowAny])
def image_list(request):
    if request.method == "GET":
        images = Images.objects.all()
        serializer = ImageSerializer(images, many=True)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = ImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)       
