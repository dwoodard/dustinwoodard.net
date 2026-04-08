<?php

namespace App\Filament\Resources\PortfolioItems\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Schema;

class PortfolioItemForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title')
                    ->required()
                    ->maxLength(255),

                Textarea::make('description')
                    ->required()
                    ->rows(3),

                FileUpload::make('image')
                    ->image()
                    ->directory('portfolio')
                    ->nullable(),

                TextInput::make('url')
                    ->url()
                    ->nullable()
                    ->placeholder('https://example.com'),

                TagsInput::make('tags')
                    ->nullable(),

                Grid::make(2)
                    ->schema([
                        TextInput::make('sort_order')
                            ->numeric()
                            ->default(0),

                        Toggle::make('is_visible')
                            ->default(true),
                    ]),
            ]);
    }
}
