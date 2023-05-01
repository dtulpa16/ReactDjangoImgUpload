# Generated by Django 4.2 on 2023-05-01 21:50

from django.db import migrations, models
import images.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Images',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('description', models.TextField()),
                ('image_url', models.ImageField(blank=True, null=True, upload_to=images.models.upload_to)),
            ],
        ),
    ]
