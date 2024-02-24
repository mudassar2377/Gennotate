# Generated by Django 5.0.2 on 2024-02-23 04:28

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gennotate', '0003_segmentedimage'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='segmentedimage',
            name='generatedImageId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gennotate.generatedimage'),
        ),
        migrations.AlterField(
            model_name='generatedimage',
            name='userId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
